import React from "react";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ id, image, title, author, excerpt, views, post }) => {
  const navigate = useNavigate();

  const handleOpenBlog = () => {
    navigate(`/blog/${id}`, { state: { post } });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover"
        onClick={handleOpenBlog}
      />
      <div className="p-4">
        <h3
          className="text-lg font-semibold text-gray-800 mb-2 leading-tight hover:underline"
          onClick={handleOpenBlog}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{author}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <span
            className="text-blue-600 text-sm hover:underline inline-block mb-2"
            onClick={handleOpenBlog}
          >
            Leer más
          </span>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            {views.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
