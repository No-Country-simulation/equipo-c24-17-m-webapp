import { Button } from "@/components/ui/button";
import React from "react";
import CardPariente from "./card-pariente";
import Link from "next/link";
import { getParientes, getSession } from "@/lib/database";

export default async function page() {
	const sesion = await getSession();
	const parientes = await getParientes(sesion.email);

	return (
		<div className="">
			<main className="grid content-center min-h-screen justify-center gap-8">
				{parientes.map((item) => (
					<CardPariente key={item.id} pariente={item} />
				))}

				<Button variant={"outline"}>
					<Link href={"/panel/pariente/crear"}>Agregar pariente</Link>
				</Button>
			</main>
		</div>
	);
}
