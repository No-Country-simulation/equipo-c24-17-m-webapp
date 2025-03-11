"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const accordions = [
	{
		title: "¿Qué es el TEA?",
		content:
			"El autismo es una condición de origen neurobiológico que acompaña a las personas a lo largo de su vida y genera particularidades para comunicarse y relacionarse con otros e intereses restringidos, además de un procesamiento sensorial diferente.",
	},
	{
		title: " ¿Por qué hablamos de espectro?",
		content:
			"Hablamos de espectro porque el autismo se manifiesta de forma diversa en cada persona. Varía en síntomas, niveles de apoyo y habilidades. Algunas personas requieren más ayuda, mientras que otras son independientes. No hay un único perfil de TEA, sino una amplia gama de características.",
	},
	{
		title: "¿Cómo se diagnostica?",
		content:
			"El diagnóstico debe ser realizado por un equipo multidisciplinario, que puede incluir neurólogos, pediatras, psicólogos, psiquiatras infantiles, fonoaudiólogos y terapeutas ocupacionales. El TEA se puede detectar desde los 18 meses, pero en algunos casos, el diagnóstico puede hacerse más tarde. La intervención temprana es clave para mejorar el desarrollo y la calidad de vida de los niños con autismo.",
	},
];

export const PreguntasFrecuentes = () => {
	return (
		<section id="faqs" className="relative">
			<Image
				src={"triangulo-divisor.svg"}
				alt="triangulo divisor"
				width={2500}
				height={300}
				className=" absolute -top-1 right-0 left-0 w-full z-20"
			/>

			<div className="bg-[url('/bg-faqs-0.avif')] bg-cover bg-center min-h-[800px] flex flex-col items-center py-20 lg:pt-32 xl:pt-44 opacity-70">
				<h3 className="text-3xl font-bold text-center text-white mb-14 mt-16">
					Preguntas Frecuentes
				</h3>

				<div className="container mx-auto max-w-[1100px] ">
					<Accordion type="multiple" className="w-full space-y-6 ">
						{accordions.map((accordion) => (
							<AccordionItem
								key={accordion.title}
								value={accordion.title}
								className="border-none "
							>
								<AccordionTrigger className="bg-slate-200 opacity-90  px-6 py-4 rounded-3xl text-lg font-medium transition-all  mx-2   data-[state=open]:rounded-b-none  ">
									<p className="ml-0 md:ml-6">{accordion.title}</p>
								</AccordionTrigger>
								<AccordionContent className="bg-slate-200 opacity-90  px-6 py-4 rounded-b-2xl   border-t-0 -mt-2 mx-2 ">
									<p className="pl-6 text-base">{accordion.content}</p>
								</AccordionContent>
							</AccordionItem>
						))}
						<AccordionItem
							value="¿Cuáles son las señales de alerta del autismo?"
							className="border-none "
						>
							<AccordionTrigger className="bg-slate-200 opacity-90  px-6 py-4 rounded-3xl text-lg font-medium transition-all  mx-2  data-[state=open]:rounded-b-none  ">
								<p className="ml-0 md:ml-6">
									¿Cuáles son las señales de alerta del autismo?
								</p>
							</AccordionTrigger>
							<AccordionContent className="bg-slate-200 opacity-90  px-6 py-4 rounded-b-2xl   border-t-0 -mt-2 mx-2 ">
								<p className="text-[16px] pl-8">
									Las señales de alerta del TEA pueden manifestarse desde los
									primeros meses de vida y varían en cada niño. Sin embargo, hay
									ciertos indicadores en el desarrollo social, comunicativo y
									conductual que pueden ayudar a detectarlo tempranamente, como
									por ejemplo:
								</p>
								<ul className="pl-6">
									<li>- No tiene Interacción social </li>
									<li>
										- No responde a su nombre ni mantiene contacto visual.
									</li>
									<li>- No muestra interés en jugar con otros.</li>
									<li>- Dificultad para comprender emociones</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value="¿Qué tengo que hacer si sospecho que mi hijo/a tiene autismo?"
							className="border-none "
						>
							<AccordionTrigger className="bg-slate-200 opacity-90  px-6 py-4 rounded-3xl text-lg font-medium transition-all  mx-2   data-[state=open]:rounded-b-none  ">
								<span className="ml-0 md:ml-6">
									¿Qué tengo que hacer si sospecho que mi hijo/a tiene autismo?
								</span>
							</AccordionTrigger>
							<AccordionContent className="bg-slate-200 opacity-90  px-6 py-4 rounded-b-2xl   border-t-0 -mt-2 mx-2 ">
								<ul className="pl-6">
									<li>1- Observa y registra las señales de alerta. </li>
									<li>
										2-Consulta con un especialista (pediatra, neurólogo,
										psicólogo).
									</li>
									<li>
										{" "}
										3- Solicita una evaluación para un diagnóstico preciso.
									</li>
									<li>
										{" "}
										4️- Inicia una intervención temprana (terapias y
										estimulación).
									</li>
									<li>
										{" "}
										5️- Infórmate y busca apoyo en profesionales y comunidades.
										La detección temprana mejora su desarrollo y calidad de
										vida. 💙{" "}
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
};
