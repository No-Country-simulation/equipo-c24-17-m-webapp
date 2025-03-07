import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { getPariente } from "@/lib/database";
import { Button } from "@/components/ui/button";
import { AppWindow, FilePenLine, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { es } from "date-fns/locale";
export default async function Layout({
	children,
	params,
}: {
	children: ReactNode;
	params: Promise<{ id: number }>;
}) {
	const { id } = await params;

	const familiar = await getPariente(id);
	const {
		nombre,
		apellido,
		fechaNacimiento,
		nombreDiagnostico,
		descripcionDiagnostico,
		fechaInicio,
		fechaCulminacion,
	} = familiar;

	const edad = () => {
		const nacimiento = new Date(fechaNacimiento);
		const anioActual = new Date();
		return anioActual.getFullYear() - nacimiento.getFullYear();
	};
	return (
		<section className="container w-[95%] mx-auto space-y-8">
			<div className="grid grid-cols-[1fr_300px] gap-8">
				<Card className="min-h-[200px]">
					<CardContent className="flex items-center justify-start gap-4 h-full">
						<div className="flex items-center justify-center">
							<Image
								src={"/profile-nene.svg"}
								alt="profile picture"
								width={130}
								height={130}
							/>
						</div>
						<div className="flex flex-col items-start justify-between gap-4">
							<h1 className="text-2xl">
								{nombre} {apellido}
							</h1>
							<p className="text-darkCl">
								Edad: <span className="text-black">{edad()}</span>{" "}
							</p>
							<p className="text-darkCl">
								Diagnóstico:{" "}
								<span className="text-black">
									{nombreDiagnostico.toUpperCase()}
								</span>{" "}
							</p>
							<p className="text-darkCl">
								Descripción del diagnóstico:{" "}
								<span className="text-black">{descripcionDiagnostico}</span>{" "}
							</p>
						</div>
						<div className="self-end text-center mb-2 ml-8">
							{fechaInicio && fechaCulminacion && (
								<div className="space-y-1">
									<div className="text-darkCl space-y-1">
										<p>Inicio de terapia: </p>
										<p className="text-black">
											{format(fechaInicio, "dd/MM/yyyy", { locale: es })}
										</p>{" "}
									</div>
									<div className="text-darkCl space-y-1">
										<p>Fin de terapia: </p>
										<p className="text-black">
											{format(fechaCulminacion, "dd/MM/yyyy", { locale: es })}
										</p>{" "}
									</div>
								</div>
							)}
						</div>
					</CardContent>
				</Card>
				<div className="flex flex-col justify-between items-center gap-4">
					<Button className="w-full  bg-verdeCl text-white hover:bg-verdeCl hover:opacity-80 h-12 rounded-full">
						<Link
							href={`/panel/familiares/${id}/terapias`}
							className="flex items-center justify-center gap-2"
						>
							<span className="text-xl">Panel</span>{" "}
							<AppWindow className="w-7 h-7 text-white" />{" "}
						</Link>
					</Button>
					<Button className="w-full  bg-blueCl text-white hover:bg-blueCl hover:opacity-80 h-12 rounded-full">
						<Link
							href={`/panel/familiares/${id}/terapias`}
							className="flex items-center justify-center gap-2"
						>
							<span className="text-xl">Terapias</span>{" "}
							<HeartHandshake className="w-7 h-7 text-white" />{" "}
						</Link>
					</Button>
					<Button className="w-full bg-rosaCl text-white hover:bg-rosaCl hover:opacity-80 h-12 rounded-full">
						<Link
							href={`/panel/familiares/${id}/incidencias`}
							className="flex items-center justify-center gap-2"
						>
							<span className="text-xl">Incidencias</span>{" "}
							<FilePenLine className="w-7 h-7 text-white" />{" "}
						</Link>
					</Button>
				</div>
			</div>

			<div>{children}</div>
		</section>
	);
}
