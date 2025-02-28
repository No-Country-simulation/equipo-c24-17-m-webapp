import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User2Icon } from "lucide-react";
import PopParienteOpciones from "./pop-pariente-opciones";
import { ParienteT } from "@/lib/definitions";

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
	} = pariente;
	return (
		<Card className="relative">
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
					<p className="text-red-500">Fecha nacimiento:</p>{" "}
					<p className="">{fechaNacimiento}</p>
				</div>
				<div className="flex items-center gap-1">
					<p className="text-red-500">Diagnóstico:</p>{" "}
					<p className="">{nombreDiagnostico}</p>
				</div>
				<div className="flex items-center gap-1">
					<p className="text-red-500">Descripcion de Diagnostico:</p>{" "}
					<p className="">{descripcionDiagnostico}</p>
				</div>
				<div className="flex items-center">
					<div className="flex items-center gap-1">
						<p className="text-red-500">CUD:</p>{" "}
						<Button variant={"link"}>Ver aqui</Button>
					</div>
					<div className="flex items-center gap-1">
						<p className="text-red-500">Estado CUD:</p>{" "}
						<p className="">Activo</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
