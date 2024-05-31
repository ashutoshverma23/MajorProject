import "./Home.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import chatbot from "./chatbot.png";
import { useAuthContext } from "../../context/AuthContext";

const Home = () => {
  const { authUser } = useAuthContext();

  return (
    <>
      <>
        <div className="flex-container">
          <div className="flex-item">
            <div className="home-left">
              <div className="heading-text">
                <h1 id="brand">SAATHI</h1>
                <h2 id="slogan">Your Personal mental health companion</h2>
              </div>
              <Link to="/aboutus">
                <button>Know More</button>
              </Link>
            </div>
          </div>

          {/* right components */}
          <div className="flex-item">
            <div className="home-right">
              <img src={chatbot} alt="chatbot" className="chat-image" />
              <Link to={authUser ? "/chat" : "/login"}>
                <button>{authUser ? "Chat" : "Login to chat"}</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
};

export default Home;
