import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Calendar from "react-calendar";
import Image from "next/image";
import { getPariente } from "@/lib/database";
import { Button } from "@/components/ui/button";
import { HeartHandshake, UserPen } from "lucide-react";
import Link from "next/link";

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
	} = familiar;

	const edad = () => {
		const nacimiento = new Date(fechaNacimiento);
		const anioActual = new Date();
		return anioActual.getFullYear() - nacimiento.getFullYear();
	};
	return (
		<section className="container w-[95%] mx-auto space-y-8">
			<div className="grid grid-cols-[1fr_300px] gap-8">
				<Card>
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
					</CardContent>
				</Card>
				<Calendar className="rounded-md border shadow" locale="es-AR" />
			</div>

			<div className="grid grid-cols-[100px_1fr] gap-4">
				<div className="flex flex-col items-center gap-4">
					<Button className=" gap-0  rounded-full h-16 w-16 bg-blueCl text-white hover:bg-blueCl hover:opacity-80">
						<Link
							href={`/panel/familiares/${id}/terapias`}
							className="flex flex-col items-center justify-center"
						>
							<HeartHandshake className="w-7 h-7 text-white" />{" "}
							<span className="text-[8px]">Terapias</span>{" "}
						</Link>
					</Button>
					<Button className=" gap-0 rounded-full h-16 w-16 bg-rosaCl text-white hover:bg-rosaCl hover:opacity-80">
						<Link
							href={`/panel/familiares/${id}/incidencias`}
							className="flex flex-col items-center justify-center"
						>
							<UserPen className="w-7 h-7 text-white" />{" "}
							<span className="text-[8px]">Incidencias</span>{" "}
						</Link>
					</Button>
				</div>
				<div>{children}</div>
			</div>
		</section>
	);
}
