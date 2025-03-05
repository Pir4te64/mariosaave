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
          <div className="flex items-center justify-center h-24 bg-gray-300 text-white">
            <p>Texto de la segunda sección, que puede ser más información.</p>
          </div>
        </div>

        {/* Última sección: 4 mini divs con texto */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-blue-500 text-white flex items-center justify-center h-20">
            <p>Mini 1</p>
          </div>
          <div className="bg-green-500 text-white flex items-center justify-center h-20">
            <p>Mini 2</p>
          </div>
          <div className="bg-yellow-500 text-white flex items-center justify-center h-20">
            <p>Mini 3</p>
          </div>
          <div className="bg-purple-500 text-white flex items-center justify-center h-20">
            <p>Mini 4</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compromiso;
