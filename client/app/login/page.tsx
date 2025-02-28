import IniciarSesion from "@/components/iniciar-sesion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default async function page() {
	return (
		<div className="flex items-center justify-center min-h-screen flex-col gap-4 bg-blueCl ">
			<Card>
				<CardHeader>
					<CardTitle className="text-center font-normal   tracking-wide">
						!Bienvenido!
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col items-center text-center gap-6">
					<Image src="/logo.svg" alt="" width={150} height={200} />
					<IniciarSesion />
				</CardContent>
			</Card>
			<h1></h1>
		</div>
	);
}
