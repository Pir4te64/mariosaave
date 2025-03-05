import img1 from "../assets/handshake.png";
import SubCaja from "./CompromisoItem";
const Compromiso = () => {
  return (
    <section className="w-full mt-32 flex justify-center items-center bg-black py-16">
      <div className="w-11/12 md:w-4/5 text-left">
        {/* Título con borde inferior */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 inline-block border-b-4 border-softYellow pb-2">
          Compromiso con la Salud y el Bienestar
        </h2>

        {/* Párrafo alineado a la izquierda */}
        <p className="text-lg md:text-xl text-white mb-8">
          Como entrenador personal, el compromiso con la salud y el bienestar es
          el pilar fundamental de mi enfoque. Más allá de los entrenamientos,
          busco inspirar un cambio de mentalidad que permita a mis clientes
          alcanzar su máximo potencial físico y mental. A través de hábitos
          saludables, un entrenamiento personalizado y un enfoque integral, mi
          misión es ayudar a transformar vidas, creando un camino hacia una vida
          más sana, activa y equilibrada.
        </p>

        {/* Nuevo div con dos secciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SubCaja />
          {/* Segunda sección: Un solo texto */}
          <div className="hidden md:flex items-center justify-center h-24 bg-gray-300 text-white">
            <p>Texto de la segunda sección, que puede ser más información.</p>
          </div>
        </div>

        {/* Última sección: 4 mini divs con texto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {/* Años de experiencia */}
          <div className="text-white flex flex-col items-center justify-center h-20">
            <span className="text-6xl font-bold mb-2">
              <strong className="text-softYellow mr-2 text-6xl">+</strong>
              10
            </span>
            <p className="text-sm font-thin uppercase mt-2">
              Años de experiencia
            </p>
          </div>

          {/* Casos de éxito */}
          <div className="text-white flex flex-col items-center justify-center h-20">
            <span className="text-6xl font-bold mb-2">
              <strong className="text-softYellow mr-2 text-6xl">+</strong>
              100
            </span>
            <p className="text-sm uppercase mt-2">Casos de éxito</p>
          </div>

          {/* Veces campeón */}
          <div className="text-white flex flex-col items-center justify-center h-20">
            <div className="flex items-center mb-2">
              <span className="text-6xl font-bold text-softYellow mr-2">2</span>
              <span className="text-lg font-semibold">Veces campeón</span>
            </div>
            <p className="text-sm text-center uppercase mt-2">
              Fisicoculturismo en la Categoría de Peso Ligero 2024
            </p>
          </div>

          {/* Países */}
          <div className="text-white flex flex-col items-center justify-center h-20 mt-4 md:mt-0">
            <div className="flex items-center ">
              <span className="text-6xl font-bold text-softYellow mr-2">
                <strong className="text-softYellow mr-2 text-6xl">+</strong>6
              </span>
              <span className="text-lg font-semibold">Países</span>
            </div>
            <p className="text-sm text-center uppercase mt-2">
              Países con clientes que eligen el método Mario Saave
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compromiso;
