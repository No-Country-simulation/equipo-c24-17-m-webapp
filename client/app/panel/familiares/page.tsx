import React from "react";
import CardPariente from "./card-pariente";
import { getParientes, getSession } from "@/lib/database";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import CrearDialog from "./crear-dialog";

export default async function page() {
	const { email } = await getSession();
	const parientes = await getParientes(email);

	return (
		<main className="p-10">
			<div className="flex items-center justify-center gap-8 mb-4">
				<Card className="max-w-[370px]  min-h-[190px]">
					<CardHeader>
						<CardTitle className="text-xl font-normal">
							Añadir Perfil Nuevo
						</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col items-center">
						<p>Cargar un nuevo perfil de registro aquí.</p>
						<CrearDialog correoUsuario={email} />
					</CardContent>
				</Card>
			</div>

			<div className="flex flex-col gap-8 items-center justify-center">
				{parientes.map((item) => (
					<CardPariente key={item.id} pariente={item} correoUsuario={email} />
				))}
			</div>
		</main>
	);
}
