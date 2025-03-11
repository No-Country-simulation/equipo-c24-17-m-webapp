import React from "react";
import CardPariente from "./card-pariente";
import { getParientes, getSession } from "@/lib/database";
import CrearFamiliarDialog from "./crear-dialog";

export default async function page() {
	const { email } = await getSession();
	const parientes = await getParientes(email);

	return (
		<main className="p-10">
			<div className="flex items-center justify-center gap-8 mb-4">
				<CrearFamiliarDialog correoUsuario={email} />
			</div>

			<div className="flex flex-col gap-8 items-center justify-center">
				{parientes.map((item) => (
					<CardPariente key={item.id} pariente={item} correoUsuario={email} />
				))}
			</div>
		</main>
	);
}
