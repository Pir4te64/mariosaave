import React from "react";
import { useLocation } from "react-router-dom";
import { blogPosts } from "../../utils/ProgramasLecciones";
import BlogCard from "../../components/BlogCard";

const BlogDetail = () => {
  const location = useLocation();
  const { post } = location.state || {};

  if (!post) {
    return (
      <p className="text-center mt-10">
        No se encontró la información del blog
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Columna principal (contenido del blog) */}
      <div className="w-full md:w-2/3 bg-white shadow-sm rounded-lg p-6">
        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-2">
          {post.category || "Travel"}
        </span>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">
          {post.author} – {post.date || "12 enero 2025"}
        </p>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-lg mb-6"
        />
        <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
      </div>

      {/* Barra lateral (entradas relacionadas, publicidad, etc.) */}
      <aside className="w-full md:w-1/3 md:max-h-[100vh] overflow-y-auto bg-white shadow-sm rounded-lg p-4 space-y-3">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            title={post.title}
            author={post.author}
            excerpt={post.excerpt}
            views={post.views}
            post={post} // Se pasa el objeto completo del post
          />
        ))}
      </aside>
    </div>
  );
};

export default BlogDetail;
