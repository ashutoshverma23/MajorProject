import React from "react";
import writeStory from "../../assets/images/writeStory.jpg";

const StoryPage = () => {
  return (
    <>
      <div className="relative">
        <img src={writeStory} alt="writeStory" className="w-full" />
        <h1 className="md:text-6xl uppercase text-3xl text-center text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Write Your Story
        </h1>
      </div>
      <div className="text-center w-2/3 mx-auto">
        <h2 className="text-3xl font-bold mt-8">We Love to Hear Your Story</h2>
        <p className="text-gray-700 mt-4">
          Motivate and uplift others through your stories. Your personal
          narratives can become a beacon of hope, resilience, and courage in the
          twilight of stormy seas and inspire them to come out stronger and
          braver.
        </p>
      </div>

      {/* form for writing story by taking input */}
      <form className="container mx-auto mt-8 w-1/2 bg-orange-100 p-5 rounded-sm mb-8">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 border-gray-400 p-2 rounded-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border-2 border-gray-400 p-2 rounded-sm"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border-2 border-gray-400 p-2 rounded-sm"
          />
          <textarea
            placeholder="Write your story here..."
            className="border-2 border-gray-400 p-2 h-48 rounded-lg"
          ></textarea>
          <button className="bg-orange-500 text-white p-2 w-20">Send</button>
        </div>
      </form>
    </>
  );
};

export default StoryPage;
