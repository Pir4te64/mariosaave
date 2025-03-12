import SubCaja from "./CompromisoItem";
import Man from "../assets/img5.png";

const Compromiso = () => {
  return (
    // 1) Ajusta el padding vertical
    <section
      className="w-full mt-32 flex justify-center bg-black py-8"
      id="servicios"
    >
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
        {/* 2) items-start para alinear al tope en lugar de centrar verticalmente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start items-center">
          <SubCaja />

          {/* Segunda sección: se muestra la imagen en pantallas md en adelante */}
          <div className="hidden md:block">
            {/* 3) Si la imagen es muy grande, limita su altura con max-h */}
            <img
              src={Man}
              alt="Imagen de Man"
              className="object-contain w-full h-auto max-h-[600px]"
            />
          </div>
        </div>

        {/* Última sección: 4 mini divs con texto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {/* Años de experiencia */}
          <div className="text-white flex flex-col items-center justify-center">
            <span className="text-6xl font-bold mb-2">
              <strong className="text-softYellow mr-2 text-6xl">+</strong>
              10
            </span>
            <p className="text-sm font-thin uppercase mt-2">
              Años de experiencia
            </p>
          </div>

          {/* Casos de éxito */}
          <div className="text-white flex flex-col items-center justify-center">
            <span className="text-6xl font-bold mb-2">
              <strong className="text-softYellow mr-2 text-6xl">+</strong>
              100
            </span>
            <p className="text-sm uppercase mt-2">Casos de éxito</p>
          </div>

          {/* Veces campeón */}
          <div className="text-white flex flex-col items-center justify-center">
            <div className="flex items-center mb-2">
              <span className="text-6xl font-bold text-softYellow mr-2">2</span>
              <span className="text-lg font-semibold">Veces campeón</span>
            </div>
            <p className="text-sm text-center uppercase mt-2">
              Fisicoculturismo en la Categoría de Peso Ligero 2024
            </p>
          </div>

          {/* Países */}
          <div className="text-white flex flex-col items-center justify-center mt-4 md:mt-0">
            <div className="flex items-center">
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
