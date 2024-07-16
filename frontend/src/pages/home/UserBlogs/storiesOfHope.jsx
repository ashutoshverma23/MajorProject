import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BlogCard from "../../../components/card/blogCard";

const stories = [
  {
    id: 1,
    date: "September 10, 2020",
    title: "My Journey from Nothing to Everything...",
    image: "path/to/image1.png", // Replace with your image path
  },
  {
    id: 2,
    date: "July 31, 2020",
    title: "I Finally Moved on with New Vibes, Anony...",
    image: "path/to/image2.png", // Replace with your image path
  },
  {
    id: 3,
    date: "June 13, 2020",
    title: "Life has more lessons than you think....",
    image: "path/to/image3.png", // Replace with your image path
  },
  {
    id: 4,
    date: "May 5, 2020",
    title: "Embracing Challenges and Overcoming...",
    image: "path/to/image4.png", // Replace with your image path
  },
  {
    id: 5,
    date: "April 20, 2020",
    title: "Finding Hope in the Darkest Times...",
    image: "path/to/image5.png", // Replace with your image path
  },
  {
    id: 6,
    date: "March 10, 2020",
    title: "A Journey of Self-Discovery and Growth...",
    image: "path/to/image6.png", // Replace with your image path
  },
];

const StoriesOfHope = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? stories.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === stories.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-orange-50 py-12">
      <div className="container mx-auto text-center relative">
        <h2 className="text-3xl font-bold mb-4">Stories of HOPE</h2>
        <p className="text-gray-700 mb-8">
          Sharing is caring! Encourage and inspire others with your stories.
          Your experiences can give them the courage to face their fears,
          overcome their struggles, and come out stronger.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={prevSlide}
            className="text-orange-500 hover:text-orange-700"
          >
            <FaArrowLeft size={30} />
          </button>
          <div className="flex space-x-4">
            {stories.slice(currentIndex, currentIndex + 3).map((story) => (
              <BlogCard key={story.id} story={story} />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="text-orange-500 hover:text-orange-700"
          >
            <FaArrowRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoriesOfHope;
