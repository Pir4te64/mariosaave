import foto from "../assets/Sobremi.png";
import exerciseIcon from "../assets/exercise.png"; // Asegúrate de que la ruta sea correcta.

const Sobremi = () => {
  return (
    <section
      className="w-full mt-20 flex justify-center items-center"
      id="nosotros"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 md:w-10/12">
        {/* Caja 1 */}
        <div className="bg-blue-500 text-white flex items-center justify-center relative">
          <img
            src={foto} // Ruta de la imagen
            alt="Sobremi"
            className="w-full h-full object-cover"
          />
          {/* Contenedor con texto y círculo */}
          <div className="absolute -bottom-2 md:bottom-6 left-6 bg-white p-4 text-black rounded-md shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
            {/* Círculo con fondo softyellow y el icono */}
            <div className="absolute top-[-12px] left-[-12px] w-8 h-8 bg-softYellow rounded-full border-2 border-black flex items-center justify-center">
              <img src={exerciseIcon} alt="Exercise Icon" className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm md:text-base font-semibold">
              El bienestar está en el equilibrio: entrenar con constancia, sin
              excesos ni hábitos que perjudiquen el cuerpo.
            </p>
          </div>
        </div>

        {/* Caja 2 */}
        <div className="flex flex-col items-start justify-center p-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
            Experiencia Transformadora
          </h2>
          <p className="text-base sm:text-lg mb-4">
            Mario es un entrenador personal con más de 10 años de experiencia
            ayudando a sus clientes a mejorar su condición física, ganar fuerza
            y alcanzar sus objetivos de manera eficiente. Su enfoque se basa en
            entrenamientos personalizados, adaptados a cada persona, priorizando
            la técnica, la progresión y la motivación. Con una trayectoria en el
            deporte y una trayectoria trabajando en reconocidos gimnasios, desde
            hace más de 7 años se dedica exclusivamente al entrenamiento
            personalizado, diseñando planes efectivos para todo tipo de niveles,
            desde principiantes hasta atletas avanzados. Más que un entrenador,
            es un guía en el proceso de transformación física, ayudando a
            desarrollar disciplina, constancia y confianza en cada etapa del
            camino.
          </p>
          <button className="text-white bg-greenmusgo hover:bg-softYellow hover:text-black font-semibold px-8 py-3 rounded-sm transition">
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sobremi;
