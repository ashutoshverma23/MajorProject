import React from "react";
import BlogCard from "../../components/card/blogCard";

const blogs = [
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

const BlogPage = () => {
  return (
    <>
      <div className="mt-36 mx-auto max-w-[85rem] w-3/4">
        <h1 className="text-3xl font-bold text-center mt-20 mb-8 uppercase">
          Blogs
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} story={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
