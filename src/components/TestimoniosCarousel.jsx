import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonios = [
  {
    texto:
      "Training with Mario Saavedra has been a unique experience. His dedication, patience, and constant motivation have helped me improve every day. He tailors workouts to my goals and fitness level, keeping me on track. After almost two years of training with him, I can confidently say he is an excellent trainer, and I would highly recommend him to anyone looking for real results.  -  Maria Jose, Canadá",
  },
  {
    texto:
      "Entrenar con Mario durante estos tres meses ha sido una experiencia transformadora tanto física como mentalmente. Desde el primer día, me he sentido cómodo y motivado para mejorar mis hábitos. Su conocimiento y compromiso me brindan seguridad en mi rutina y en mis decisiones alimenticias, lo que me ha permitido ser más constante y disciplinado. Además, sus entrenamientos son dinámicos y efectivos, reflejándose no solo en mi físico, sino también en mi mentalidad.  -  David Ortiz, Colombia",
  },
  {
    texto:
      "I've been training with Marito for over 5 years, and wow… he’s truly changed my life. With my job, I travel a lot, and being able to connect from anywhere in the world, train with whatever I have available, and still see results is amazing. More than just a trainer, our sessions feel like therapy sometimes—haha! We talk, we train, and it’s become something I genuinely need in my routine. Highly recommended, not just for his energy and dedication, but for the wealth of knowledge he brings.  -  Andrea Dominguez, Miami.",
  },
  {
    texto:
      "Entreno con Mario desde los 14 años, y gracias a él, he desarrollado un gusto genuino por el gimnasio. Su actitud y forma de trabajo me motivan a entrenar con disciplina y esfuerzo, incluso en los días más difíciles. Su compromiso no solo me impulsa a cuidar mi cuerpo, sino también a ser más consciente de mis hábitos, como la alimentación. Además, su experiencia y conocimiento me han ayudado a mejorar mi técnica y a entender mejor mi cuerpo. Más allá de ser un gran entrenador, Mario es una persona cercana, respetuosa y paciente, siempre apoyando los procesos individuales y guiando de manera didáctica y cómoda hacia los objetivos.  -  Mariana Gaviria , Colombia.",
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
