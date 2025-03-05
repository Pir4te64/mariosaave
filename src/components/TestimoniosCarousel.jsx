import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonios = [
  {
    texto:
      "I've been training with Marito for over 5 years, and wow… he’s truly changed my life. With my job, I travel a lot, and being able to connect from anywhere in the world, train with whatever I have available, and still see results is amazing. More than just a trainer, our sessions feel like therapy sometimes—haha! We talk, we train, and it’s become something I genuinely need in my routine. Highly recommended, not just for his energy and dedication, but for the wealth of knowledge he brings. - Andrea Dominguez, Miami.",
  },
  {
    texto:
      "Marito is an exceptional coach. When I first started, I struggled with motivation and consistency. His personalized approach helped me develop a routine that actually fits my lifestyle. The workouts are always challenging yet adaptable, and his guidance on nutrition and recovery has been invaluable. What truly sets him apart is his ability to push you beyond what you think you're capable of while keeping the experience enjoyable. I’ve never felt stronger, both physically and mentally. - David R., New York.",
  },
];

const TestimoniosCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevTestimonio = () => {
    setIndex((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));
  };

  const nextTestimonio = () => {
    setIndex((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full md:w-1/2 relative flex flex-col items-center">
      {/* Icono de comillas en la esquina superior izquierda */}
      <div className="absolute -top-4 -left-4 text-gray-300 z-50">
        <Quote className="w-12 h-12 opacity-50" />
      </div>

      {/* Testimonio */}
      <p className="text-lg text-gray-600 bg-white p-6 rounded-lg shadow-md text-center relative">
        {testimonios[index].texto}
      </p>

      {/* Botones de navegación */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={prevTestimonio}
          className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextTestimonio}
          className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TestimoniosCarousel;
