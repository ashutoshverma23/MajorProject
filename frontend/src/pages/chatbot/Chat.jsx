import React, { useState, useRef, useEffect } from "react";
import "./Chat.css";
import { useMessageStore } from "../../hooks/useMessageStore";
import { useStressScore } from "../../hooks/useStressScore";

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const lastMessageRef = useRef();

  const { storeMessage } = useMessageStore();
  const { storeStressScore } = useStressScore();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [chatHistory]);

  const handleKeyPress = async (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      await sendStressScore();
      await sendMessage();
      setInputValue("");
    }
  };

  const sendStressScore = async () => {
    const text = inputValue.trim();
    if (!text) return;

    try {
      const response = await fetch("http://localhost:8080/classify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();
      const { label, score } = data; // Extract label and score from data
      console.log("Stress Score: ", { label, score });
      await storeStressScore(label, score);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const sendMessage = async () => {
    const text = inputValue.trim();
    if (!text) return;

    fetch("http://localhost:8080/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: text }),
    })
      .then((response) => response.json())
      .then((data) => {
        const botResponse = data.answer;
        setChatHistory((chatHistory) => [
          ...chatHistory,
          {
            role: "user",
            message: text,
          },
          {
            role: "model",
            message: botResponse,
          },
        ]);
        storeMessage(text);
      })
      .catch((error) => {
        console.error("Error:", error);
        inputRef.current.focus();
      });
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">SAM</div>
      <div className="chatbox">
        <div className="chatbox__messages">
          <div className="message message--bot">
            <strong>model: </strong> Hello! How can I help you today?
          </div>

          {chatHistory.map((msg, index) => (
            <div
              key={index}
              ref={index === chatHistory.length - 1 ? lastMessageRef : null}
              className={`message ${
                msg.role === "model" ? "message--bot" : "message--user"
              }`}
            >
              <strong>{msg.role}: </strong> {msg.message}
            </div>
          ))}
        </div>
        <div className="chatbox__footer">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
