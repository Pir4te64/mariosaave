import img1 from "../assets/handshake.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const items = [
  {
    img: img1,
    title: "Mejora del Rendimiento Físico:",
    text: "A través de entrenamientos personalizados, optimizo el rendimiento físico, ayudando a alcanzar metas específicas de forma efectiva y segura.",
  },
  {
    img: img2,
    title: "Prevención y Recuperación:",
    text: "Mi compromiso no solo se centra en el entrenamiento, sino también en la prevención de lesiones y la rápida recuperación, garantizando un progreso constante sin riesgos.",
  },
  {
    img: img3,
    title: "Salud Integral:",
    text: "Enfoco mi trabajo en un bienestar completo, que abarca tanto la salud física como la mental, promoviendo hábitos que mejoren la calidad de vida en todos los aspectos.",
  },
  {
    img: img4,
    title: "Motivación Constante:",
    text: "Acompañamiento continuo para mantener la motivación, superando obstáculos y manteniendo el enfoque en los objetivos personales.",
  },
];

const SubCaja = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="text-white flex flex-col w-full items-start justify-between p-3  rounded-lg h-full"
        >
          {/* Ícono y Título alineados en línea */}
          <div className="flex items-center mb-4">
            <img
              src={item.img}
              alt={`Ícono ${index}`}
              className="mr-2 w-12 h-12 object-contain"
            />
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
          {/* Párrafo */}
          <p className="text-md md:text-base">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default SubCaja;
