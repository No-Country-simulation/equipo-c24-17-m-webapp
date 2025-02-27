import { Button } from "@/components/ui/button";
import React from "react";
import CardPariente from "./card-pariente";

export default async function page() {
	return (
		<div className="">
			<main className="grid content-center min-h-screen justify-center gap-8">
				<CardPariente />
				<Button variant={"outline"}>Agregar pariente</Button>
			</main>
		</div>
	);
}
