import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordions = [
  {
    title: "¿Que es el TEA? ¿Cómo se diagnostica?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "¿TEAcompaña es una plataforma gratuita?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    title: "¿Cómo puedo unirme a la comunidad?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    title: "¿Quienespueden registrarse en TEAcompaña?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    title: "¿Cómo creo mi perfil en TEAcompaña?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.Yes. It's animated by default, but you can disable it if you prefer. ",
  },
];

export const PreguntasFrecuentes = () => {
  return (
    <>
    <div  className="absolute border-l-[50vw] border-r-[50vw] border-t-[100px] border-l-transparent border-r-transparent border-t-[#FAEDDA] z-10"></div>

      <div className="bg-[url('https://plus.unsplash.com/premium_photo-1661680863986-13eb209573e0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=...')] bg-cover bg-center min-h-[800px] flex flex-col items-center py-20 opacity-70">
        <h3 className="text-3xl font-bold text-center text-white mb-14 mt-16">
          Preguntas Frecuentes
        </h3>

        <div className="w-full max-w-7xl ">
          <Accordion type="single" collapsible className="w-full space-y-6 ">
            {accordions.map((accordion) => (
              <AccordionItem
                key={accordion.title}
                value={accordion.title}
                className="border-none "
              >
                <AccordionTrigger className="bg-slate-200 opacity-90  px-6 py-4 rounded-t-xl  text-lg font-medium transition-all  mx-2 data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none  ">
                  <span className="ml-0 md:ml-6">{accordion.title}</span>
                </AccordionTrigger>
                <AccordionContent className="bg-slate-200 opacity-90  px-6 py-4 rounded-b-2xl   border-t-0 -mt-2 mx-2 ">
                  <span className="text-[16px] ml-0 md:ml-6">
                    {accordion.content}
                  </span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};
