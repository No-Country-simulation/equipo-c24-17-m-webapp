import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User2Icon, ZoomIn } from "lucide-react";
import PopParienteOpciones from "./pop-pariente-opciones";
import { ParienteT } from "@/lib/definitions";
import Link from "next/link";

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
		<Card className="relative max-w-[390px]">
			<div className="absolute right-2 top-2">
				<PopParienteOpciones
					pariente={pariente}
					correoUsuario={correoUsuario}
				/>
			</div>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<div className="bg-[#6D89CF] rounded-full p-1 text-white">
						<User2Icon />
					</div>
					<span className="text-2xl text-[#6D89CF] font-normal">
						{nombre} {apellido}
					</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex items-center gap-1">
					<p className="text-[#696868]">Fecha nacimiento:</p>{" "}
					<p className="">{fechaNacimiento.toString()}</p>
				</div>
				<div className="flex items-center gap-1">
					<p className="text-[#696868]">Diagnóstico:</p>{" "}
					<p className="">{nombreDiagnostico}</p>
				</div>
				<div className="flex items-center gap-1">
					<p className="text-[#696868]">Descripcion de Diagnostico:</p>{" "}
					<p className="">{descripcionDiagnostico}</p>
				</div>
				<Button className=" gap-0  rounded-full h-12 w-12 bg-blueCl text-white hover:bg-blueCl hover:opacity-80 mx-auto flex justify-center mt-2 ">
					<Link
						href={`/panel/familiares/${id}`}
						className="flex flex-col items-center justify-center"
					>
						<ZoomIn className="w-7 h-7 text-white" />{" "}
					</Link>
				</Button>
			</CardContent>
		</Card>
	);
}
