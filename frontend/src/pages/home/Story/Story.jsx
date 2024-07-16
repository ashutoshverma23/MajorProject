import React from "react";
import story from "../../../assets/images/story.jpg";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center align-center">
        <div className="justify-center">
          <img src={story} alt="" className="max-w-[500px]" />
        </div>
        <div className="flex flex-col justify-center max-w-[500px]">
          <h1 className="text-2xl">We Love to Hear Your Story</h1>
          <p>
            Motivate and uplift others through your stories. Your personal
            narratives can become a beacon of hope, resilience, and courage in
            the twilight of stormy seas and inspire them to come out stronger
            and braver.
          </p>
          <Link to="/write-story">
            <button className="bg-orange-500 w-40 text-white mt-4">
              Write Your Story
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Story;
