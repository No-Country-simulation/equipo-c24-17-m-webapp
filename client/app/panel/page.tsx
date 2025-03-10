import {
	UserPlus,
	FilePenLine,
	HeartHandshake,
	ChevronRight,
} from "lucide-react";
import React from "react";
import CardPasos from "./card-pasos";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const cardContent = [
	{
		titulo: "CREAR EL PERFIL DE UN FAMILIAR",
		parrafo: `Para comenzar podrás crear un perfil de usuario de tu hijo o
							familiar para poder llevar un registro de sus consultas médicas,
							terapias e incidencias.`,
		color: "#5FBDAC",
		icono: UserPlus,
	},
	{
		titulo: "CREAR INCIDENCIAS",
		parrafo: `Una vez dentro del perfil podrás registrar cada incidencia que tu hijo o familiar tenga durante su proceso, podras registar el tiempo de duración, que tipo de incidencia fué y si fue favorable o no.`,
		color: "#6D89CF",
		icono: FilePenLine,
	},
	{
		titulo: "CREAR CONSULTAS",
		parrafo: `También podrás crear una consulta de las terapias que esté realizando, con fecha, hora y lugar para poder tener más accesible toda la info y no olvidarte que días tiene las consultas.`,
		color: "#E8386C",
		icono: HeartHandshake,
	},
];

export default function page() {
	return (
		<section>
			<div className="container max-w-[90%] mx-auto xl:max-w-[900px]">
				<h1 className="text-center text-blueStrongCl text-2xl font-semibold lg:mt-4">
					Bienvenidos al Panel de TEAcompaño
				</h1>
				<p className="text-center pt-2">¿Qué puedo hacer en el panel?</p>
				<div className="flex flex-col gap-8 my-10">
					{cardContent.map((item, index) => (
						<CardPasos
							key={item.titulo}
							cardContent={item}
							number={index + 1}
						/>
					))}
				</div>
				<div className="flex justify-end">
					<Button className=" bg-gradient-to-r  from-fucCl  to-yellowCl rounded-3xl  transition-colors py-5 px-4 my-2 hover:opacity-80 font-semibold text-white tracking-wide">
						<Link
							href={"/panel/familiares"}
							className="flex items-center gap-1"
						>
							<span>CONTINUAR</span> <ChevronRight />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
