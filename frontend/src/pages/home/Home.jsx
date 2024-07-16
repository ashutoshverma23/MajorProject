import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import chatbot from "./chatbot.png";
import { useAuthContext } from "../../context/AuthContext";
import Hero from "./Hero/Hero";
import Story from "./Story/Story";
import StoriesOfHope from "./UserBlogs/storiesOfHope";
import chatImage from "../../assets/images/chatbot.png";

const Home = () => {
  const { authUser } = useAuthContext();

  return (
    <>
      <Hero />
      <div className="flex md:flex-row flex-col justify-center items-center md:min-h-80 bg-orange-200">
        <div className="flex flex-col justify-center items-center max-w-[500px]">
          <div className="ml-10">
            <h1 className="text-white text-3xl ">How it Wroks?</h1>
            <h2>
              Go to Chatbot and communicate with it like a friend. It will
              provide you with answers to your queries about mental health as
              well.
              <br /> And then check the reports and get the suggestions.
            </h2>
          </div>
          <Link to="/aboutus">
            <button className="bg-white text-black mt-10">Know More</button>
          </Link>
        </div>

        {/* right components */}
        <div className="flex flex-col justify-center items-center min-w-[500px] mb-5">
          <img src={chatImage} alt="chatbot" className="max-w-80" />
          <Link to={authUser ? "/chat" : "/login"}>
            <button className="bg-white text-black">
              {authUser ? "Chat" : "Login to chat"}
            </button>{" "}
          </Link>
        </div>
      </div>
      <StoriesOfHope />
      <Story />
    </>
  );
};

export default Home;
