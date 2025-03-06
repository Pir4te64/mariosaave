import React from "react";
import PlanCard from "../components/PlanCard";

const Planes = () => {
  // Datos de los planes
  const planesData = [
    {
      title: "Plan Básico",
      subtitle: "Step to Step",
      features: [
        {
          text: "Control de seguimiento por plataforma online",
          included: true,
        },
        {
          text: "Recibe un plan de alimentación y asesoramiento personalizado.",
          included: true,
        },
        {
          text: "Te enviamos toda la información en un documento detallado.",
          included: true,
        },
        { text: "Clases virtuales", included: false }, // Ejemplo de NO incluido
      ],
      buttonText: "¡Unirme!",
    },
    {
      title: "Plan Together",
      subtitle: "Clases en parejas",
      features: [
        {
          text: "Control de seguimiento por plataforma online",
          included: true,
        },
        {
          text: "Ideal para 2 usuarios que desean entrenar juntas.",
          included: true,
        },
        {
          text: "16 clases virtuales al mes (3 por semana).Plan de alimentación personalizado",
          included: true,
        },
        {
          text: "Perfecto para entrenar con amigos, pareja, familiares , etc...",
          included: true,
        },
        { text: "Acompañamiento y seguimiento en pareja.", included: true },
      ],
      buttonText: "¡Unirme!",
    },
    {
      title: "Plan Squad",
      subtitle: "Clases de 3-4 personas",
      features: [
        {
          text: "Control de seguimiento por plataforma online",
          included: true,
        },
        {
          text: "Perfecto para grupos pequeños que buscan motivarse juntos.",
          included: true,
        },
        { text: "12 clases virtuales al mes (3 por semana).", included: true },
        { text: "Entrenamiento grupal personalizado.", included: true },
      ],
      buttonText: "¡Unirme!",
    },
    {
      title: "Plan Personal",
      subtitle: "Personalizado 1:1",
      features: [
        {
          text: "Control de seguimiento por plataforma online",
          included: true,
        },
        {
          text: "Para quienes buscan la máxima atención y personalización.",
          included: true,
        },
        { text: "16 clases virtuales al mes (4 por semana).", included: true },
        {
          text: "Recibe un plan de alimentación y asesoramiento personalizado. clases virtuales al mes",
          included: true,
        },
        {
          text: "Entrenamiento individual adaptado a tus objetivos.",
          included: true,
        },
      ],
      buttonText: "¡Unirme!",
    },
  ];

  return (
    <section className="w-full my-16 flex flex-col justify-center items-center px-4">
      {/* Título y descripción */}
      <div className="w-full md:w-4/5 text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Nuestros Planes de Entrenamiento (100% Virtuales)
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Ofrecemos 4 planes mensuales, diseñados para adaptarse a diferentes
          necesidades y objetivos.
        </p>
      </div>

      {/* Contenedor de los 4 planes */}
      <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {planesData.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            subtitle={plan.subtitle}
            features={plan.features}
            buttonText={plan.buttonText}
          />
        ))}
      </div>
    </section>
  );
};

export default Planes;
