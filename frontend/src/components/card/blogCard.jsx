import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ story }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden max-w-80 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-gray-500 text-sm">{story.date}</p>
        <h3 className="text-xl font-bold mb-2">{story.title}</h3>
        <Link
          to={`/blogs/${story.id}`}
          className="bg-orange-500 text-white text-center px-4 py-2 rounded inline-block w-40 mx-auto mt-auto hover:bg-orange-600 hover:shadow-2xl"
        >
          Read Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
