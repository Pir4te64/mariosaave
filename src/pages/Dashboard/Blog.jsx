import React from "react";
import { blogPosts } from "../../utils/ProgramasLecciones";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
  const noticias = [
    "Noticia 1: Nueva actualización en React",
    "Noticia 2: Lanzamiento de Tailwind CSS v3",
    "Noticia 3: JavaScript sigue siendo el rey del frontend",
    "Noticia 4: La importancia de aprender TypeScript",
  ];

  return (
    <div className="p-4">
      {/* Header principal */}
      <div className="bg-white shadow-sm rounded-lg p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
        {/* Sección de texto: centrado en mobile y alineado a la izquierda en desktop */}
        <div className="md:w-1/2 text-center md:text-left">
          <span className="text-sm text-gray-500">12 enero 2025</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Lorem ipsum loremp ipsum lorem ipsum
          </h1>
          <p className="text-greenmusgo mt-4 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </p>
          <button className="px-4 py-2 bg-greenmusgo text-white rounded-md hover:bg-softYellow hover:text-black transition-colors">
            Leer más
          </button>
        </div>

        {/* Sección de imagen */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://placehold.org/400x300/cccccc/000000?text=Hola+MundO"
            alt="Imagen del blog"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Sección de Noticias */}
      <h2 className="text-3xl text-gray-800 text-left mb-6">
        Noticias que te interesen
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 w-11/12 justify-center mx-auto">
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
      </div>
    </div>
  );
};

export default Blog;
