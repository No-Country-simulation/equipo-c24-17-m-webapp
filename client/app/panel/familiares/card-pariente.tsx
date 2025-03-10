import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ZoomIn } from "lucide-react";
import PopParienteOpciones from "./pop-pariente-opciones";
import { ParienteT } from "@/lib/definitions";
import Link from "next/link";
import Image from "next/image";

export default function CardPariente({
	pariente,
	correoUsuario,
}: {
	pariente: ParienteT;
	correoUsuario: string;
}) {
	const {
		apellido,
		fechaNacimiento,
		nombre,
		nombreDiagnostico,
		descripcionDiagnostico,
		id,
	} = pariente;
	return (
		<Card className="relative pt-6 max-w-[450px]">
			<div className="absolute right-2 top-2">
				<PopParienteOpciones
					pariente={pariente}
					correoUsuario={correoUsuario}
				/>
			</div>

			<CardContent className="grid grid-cols-[fit-content(80px)_1fr_50px] gap-4 text-sm">
				<div className="flex items-center justify-center gap-4">
					<Image
						src={"/profile-nene.svg"}
						alt="profile picture"
						width={130}
						height={130}
						className="rounded-full"
					/>
				</div>
				<div className="flex flex-col items-start justify-between gap-2">
					<h2 className="text-2xl text-[#6D89CF]">
						{nombre} {apellido}
					</h2>
					<div className="flex items-center gap-1">
						<p className="text-[#696868]">Fecha nacimiento:</p>{" "}
						<p className="">{fechaNacimiento.toString()}</p>
					</div>
					<div className="flex items-center gap-1">
						<p className="text-[#696868]">Diagnóstico:</p>{" "}
						<p className="">{nombreDiagnostico}</p>
					</div>
					<div className="">
						<p className="text-[#696868]">
							Descripcion:{" "}
							<span className="text-black">{descripcionDiagnostico}</span>
						</p>{" "}
					</div>
				</div>

				<Button className=" gap-0  rounded-full h-12 w-12 bg-blueCl text-white hover:bg-blueCl hover:opacity-80 mx-auto flex justify-center mt-2 self-end ">
					<Link
						href={`/panel/familiares/${id}/incidencias`}
						className="flex flex-col items-center justify-center"
					>
						<ZoomIn className="w-7 h-7 text-white" />{" "}
					</Link>
				</Button>
			</CardContent>
		</Card>
	);
}
