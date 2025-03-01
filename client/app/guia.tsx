import {
  CalendarPlus2,
  ClipboardPlus,
  NotebookText,
  Users,
} from "lucide-react";
import Image from "next/image";

const cards = [
  {
    title: "Calendario",
    description:
      "Podrás acceder a un calendario donde veras los turnos medicos, terapias y los avisos de la medicación",
    icon: <CalendarPlus2 className="text-white w-32 h-32" />,
  },
  {
    title: "Historia clínica",
    description:
      "Podrás ingresar toda la historia clínica de tu hijo, para fácil acceso",
    icon: <ClipboardPlus className="text-white w-32 h-32" />,
  },
  {
    title: "Guías informativas",
    description:
      "Podrás acceder a información segura, segun tu necesidad, para descargar y ayudarte en cada situación",
    icon: <NotebookText className="text-white w-32 h-32" />,
  },
  {
    title: "Comunidades",
    description:
      "Podrás comunicarte con otros padre, contando sus experiencias para crear una red de contención",
    icon: <Users className="text-white w-32 h-32" />,
  },
];

export const Guia = () => {
  return (
    <>
      <section  className="bg-[#FAEDDA]   min-h-[650px]">
        <Image
          src="/nube.svg"
          alt="Imagen rotada"
          width={1920} 
          height={1500} 
          className="rotate-180 top-0 left-0 w-full "
        />

        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-20 text-[#000000] mt-20">
            Estamos en tu día a día para hacerlo más fácil
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center ">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-center text-center w-64 h-[350px] mb-4 pb-5"
              >
                <div className="flex items-center justify-center w-[217px] h-[179px] bg-gradient-to-r from-[#FF4E50] to-[#FED201] rounded-2xl shadow-lg ">
                  {card.icon}
                </div>

                <h3 className="mt-7 mb-5 text-xl md:text-2xl font-bold ">
                  {card.title}
                </h3>

                <p className="text-md text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
