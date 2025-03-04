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
		icon: CalendarPlus2,
	},
	{
		title: "Historia clínica",
		description:
			"Podrás ingresar toda la historia clínica de tu hijo, para fácil acceso",
		icon: ClipboardPlus,
	},
	{
		title: "Guías informativas",
		description:
			"Podrás acceder a información segura, segun tu necesidad, para descargar y ayudarte en cada situación",
		icon: NotebookText,
	},
	{
		title: "Comunidades",
		description:
			"Podrás comunicarte con otros padre, contando sus experiencias para crear una red de contención",
		icon: Users,
	},
];

export const Guia = () => {
	return (
		<>
			<section className="bg-[#FAEDDA] mt-20 ">
				<Image
					src="/nube.svg"
					alt="Imagen rotada"
					width={1920}
					height={1500}
					className="rotate-180 top-0 left-0 w-full "
				/>

				<div className="container mx-auto max-w-[1100px] px-4 py-10 text-center">
					<h2 className="text-2xl md:text-3xl font-bold my-20 text-[#000000]">
						Estamos en tu día a día para hacerlo más fácil
					</h2>
					<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 items-start justify-center py-10">
						{cards.map((card) => {
							const LinkIcon = card.icon;
							return (
								<div
									key={card.title}
									className="flex flex-col items-center gap-2"
								>
									<div className="flex items-center justify-center  max-w-[130px] max-h-[130px] bg-gradient-to-r from-[#FF4E50] to-[#FED201] rounded-2xl shadow-lg  p-4">
										<LinkIcon className="w-14 h-14 text-white" />
									</div>

									<h3 className="text-xl font-bold uppercase">{card.title}</h3>

									<p className="text-md text-gray-700">{card.description}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};
