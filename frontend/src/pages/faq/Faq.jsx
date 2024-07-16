import React, { useState } from "react";
import faq from "../../assets/images/faq.png";

const faqs = [
  {
    question: "What is this website for?",
    answer:
      "This website is a mental stress detection application specially for teenagers through chat.",
  },
  {
    question: "How to check mental stress?",
    answer:
      "When you chat your responses are analyzed and a report is generated on that basis.",
  },
  {
    question: "Is the chat only for teenagers?",
    answer:
      "No, it is suitable for all age groups. The things is it is more Interrogative so that users provide their feelings and all to the ML model.",
  },
];

const Faq = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  return (
    <>
      <div className="relative">
        <img src={faq} alt="writeStory" className="w-full" />
        {/* <h1 className="md:text-6xl uppercase text-3xl text-center text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Write Your Story
        </h1> */}
      </div>

      <div className="flex flex-col md:flex-row md:space-x-6 bg-orange-50 p-6 rounded-lg">
        <div className="flex flex-col w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-2">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className="cursor-pointer p-2 bg-white rounded shadow hover:bg-orange-100"
                onClick={() => setSelectedQuestionIndex(index)}
              >
                {faq.question}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-full md:w-2/3 mt-6 md:mt-0">
          {selectedQuestionIndex !== null ? (
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">
                {faqs[selectedQuestionIndex].question}
              </h3>
              <p>{faqs[selectedQuestionIndex].answer}</p>
            </div>
          ) : (
            <div className="p-4 bg-white rounded shadow">
              <p className="text-gray-500">
                Click on a question to see the answer here.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Faq;
