import React from "react";
import laptopImg from "../../../assets/dash.png";

const GreetingCard = () => {
  return (
    <div className="w-full h-full bg-[#99A98F] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between shadow-md">
      {/* Texto de saludo */}
      <div className="text-left mb-4 md:mb-0 md:mr-4">
        <h2 className="text-2xl font-bold text-gray-800">Hola Sebastián,</h2>
        <p className="text-gray-700 mt-1">
          Have a nice day and don't forget to take care of your health!
        </p>
        <button className="mt-4 px-4 py-2  text-white rounded-md hover:bg-greenmusgo underline">
          Learn More
        </button>
      </div>

      {/* Imagen ilustrativa (opcional) */}
      <div className="flex-shrink-0">
        {/* Usa tu propia imagen si la tienes */}
        <img
          src={laptopImg}
          alt="Laptop with plant"
          className="h-20 md:h-24 object-contain"
        />
      </div>
    </div>
  );
};

export default GreetingCard;
