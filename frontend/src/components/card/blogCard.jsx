import React from "react";

const BlogCard = ({ story }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-gray-500 text-sm">{story.date}</p>
        <h3 className="text-xl font-bold mb-2">{story.title}</h3>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Read Blog
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
