import React from "react";
import CardPariente from "./card-pariente";
import { getParientes, getSession } from "@/lib/database";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import CrearDialog from "./crear-dialog";

export default async function page() {
	const { email, nombre, imagen } = await getSession();
	const parientes = await getParientes(email);

	return (
		<div className="">
			<main className="p-10">
				<div className="flex items-center gap-8 mb-4">
					<Card className="pt-6 md:min-w-[450px] max-w-[450px] min-h-[190px] flex items-center justify-start">
						<CardContent className="flex items-center justify-start gap-4 ">
							<div className="flex items-center justify-center">
								<Image
									src={imagen}
									alt="profile picture"
									width={130}
									height={130}
									className="rounded-full max-w-[80px]"
								/>
							</div>
							<div className="flex flex-col items-start justify-between gap-4">
								<p className="text-darkCl">Usuario: </p>
								<h1 className="text-2xl">{nombre}</h1>
								<p className="text-darkCl">
									Email: <span className="text-black">{email}</span>{" "}
								</p>
							</div>
						</CardContent>
					</Card>

					<Card className="max-w-[370px]  min-h-[190px]">
						<CardHeader>
							<CardTitle className="text-xl font-normal">
								Añadir Perfil
							</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-col items-center">
							<p>Cargar un nuevo perfil de registro aquí.</p>
							<CrearDialog correoUsuario={email} />
						</CardContent>
					</Card>
				</div>

				{parientes.map((item) => (
					<CardPariente key={item.id} pariente={item} correoUsuario={email} />
				))}
			</main>
		</div>
	);
}
