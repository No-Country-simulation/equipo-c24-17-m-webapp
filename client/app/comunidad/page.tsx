import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const links = [
	{
		title: "AUTISMO Y SUS DERECHOS",
		src: "/cardComunidad1.avif",
		href: "https://discapacidadyderechos.org.ar/",
		content:
			"Las personas con discapacidad tienen derecho a un conjunto de prestaciones y servicios que aseguren su inclusión en la comunidad, su bienestar y la atención de su salud. Si tenés problemas con alguno de ellos, exigí su efectivo cumplimiento.",
	},
	{
		title: "HABLEMOS DE AUTISMO",
		src: "/hablar_tea.svg",
		href: "https://www.facebook.com/fundacionhablemosdeautismojujuy",
		content:
			"Buscamos que nuestro país, y se sume a este movimiento de conciencia mundial iluminando sus emblemas como señal para nuestra comunidad, nuestra región y el mundo. Cuanto más hablemos de autismo, mas conciencia y mejor calidad de vida lograremos.",
	},
	{
		title: "TRIBU PEQUES CON TEA",
		src: "/cardComunidad3.avif",
		href: "https://chat.whatsapp.com/GJ0vdD6FEpyAS1ewVaBEax",
		content:
			"Es un grupo de Whatsapp que tendrá, entre sus integrantes, profesionales vinculadas a la temática (psicopedagogas, abogadas, docentes, médicas, etc.) que de forma absolutamente voluntaria y solidaria se han ofrecido a acompañar con consejos y recursos.",
	},
	{
		title: "PADRES DE NENES CON AUTISMO",
		src: "/cardComunidad4.avif",
		href: "https://www.facebook.com/groups/482481429028519",
		content:
			"Es un grupo para que cada padre pueda contar su experiencia y que otros padres se puedan sacar dudas si tienen nenes recién diagnosticados",
	},
	{
		title: "ASOCIACIÓN ARGENTINA DE PADRES DE AUTISTAS",
		src: "/cardComunidad5.avif",
		href: "https://apadea.org.ar/",
		content:
			"Es una entidad civil sin fines de lucro, con sede en la Ciudad de Buenos Aires y 20 representaciones a lo largo de todo el país. Tenemos como objetivo mejorar la calidad de vida de las personas con autismo y de sus familias, nucléandolos, conteniéndolos, orientándolos y asesorándolos en sus proyectos de vida.",
	},
	{
		title: "AUTISMO EN VIVO",
		src: "/cardComunidad6.avif",
		href: "https://x.com/EnvivoAutismo",
		content:
			"Somos una ONG creada por adultos autistas y sus familias. Un grupo de familiares de personas con autismo y adultos con esta condición, cansadas de ver que las fundaciones que les representan hacen poco por sus incertidumbres y dudas, deciden crear un portal informativo llevado por adultos con autismo.",
	},
];

export default function Guia() {
	return (
		<div className="bg-bgSoftCl overflow-hidden  " id="guias">
			<Header />
			<div className="container mx-auto w-[90%] max-w-[1300px] py-20">
				<section className="flex flex-col justify-center items-center pb-[6rem] gap-6">
					{links.map((link, index) => {
						return (
							<Card
								className="w-[100%] h-[max-content] flex flex-col md:flex-row relative px-4 py-6 items-center rounded-3xl pb-8 max-[768px]:pb-12"
								key={index}
							>
								<Image
									src={link.src}
									height={0}
									width={250}
									alt="Tarjeta Comunidad"
								/>
								<div>
									<CardHeader className="flex flex-row gap-4">
										<CardTitle className="text-md m-auto text-center md:text-left md:m-0">
											{link.title}
										</CardTitle>
									</CardHeader>

									<CardContent>
										<CardDescription className="max-w-[100%] text-[12px] md:text-[14px] text-center md:text-left">
											{link.content}
										</CardDescription>
									</CardContent>
								</div>
								<Button
									className="text-white bg-[#4F73CE] border-2 border-[#4F73CE] rounded-full w-[max-content] my-2 
                                absolute -bottom-3 max-[768px]:left-1/2 max-[768px]:transform max-[768px]:-translate-x-1/2 max-[768px]:-translate-y-1/2 
                                md:bottom-2 right-6 
                                min-[1100px]:relative min-[1100px]:bottom-0 min-[1100px]:right-0 min-[1100px]:left-0 min-[1100px]:-translate-x-0 min-[1100px]:-translate-y-0 min-[1100px]:mr-8
                                hover:bg-[#fff] hover:text-[#4F73CE]
                                "
								>
									<Link href={link.href} target="_blank">
										Accede aquí
									</Link>
								</Button>
							</Card>
						);
					})}
				</section>
			</div>

			<Footer />
		</div>
	);
}

{
	/* <Link href={'/'} target="_blank">
    <small className="absolute bottom-1 right-5 text-gray-500 hover:underline cursor-pointer">{link.href}</small>
</Link> */
}
