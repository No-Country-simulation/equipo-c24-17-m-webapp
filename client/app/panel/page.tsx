import { Button } from "@/components/ui/button";
import React from "react";
import CardPariente from "./card-pariente";
import Link from "next/link";

export default async function page() {
	return (
		<div className="">
			<main className="grid content-center min-h-screen justify-center gap-8">
				<CardPariente />
				<Button variant={"outline"}>
					<Link href={"/panel/pariente"}>Agregar pariente</Link>
				</Button>
			</main>
		</div>
	);
}
