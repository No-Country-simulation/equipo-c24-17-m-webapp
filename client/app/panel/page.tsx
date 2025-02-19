import { CerrarSesion } from "@/components/cerrar-sesion";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/database";
import Image from "next/image";
import React from "react";

export default async function page() {
	const { email, imagen, nombre } = await getSession();

	return (
		<div>
			<header className=" py-4 bg-zinc-200">
				<div className="container mx-auto">
					<nav className="flex justify-between items-center">
						<div>TEAcompaño</div>{" "}
						<div className="flex items-center gap-2">
							<div>
								<Image
									src={imagen}
									alt="profile"
									width={40}
									height={40}
									className="rounded-full object-contain "
								/>
							</div>
							<div>
								<p className="capitalize">
									Hola {nombre.substring(0, nombre.indexOf(" "))}
								</p>
								<p>{email.substring(0, email.indexOf("@") + 1)}...</p>
							</div>
							<CerrarSesion />
						</div>
					</nav>
				</div>
			</header>
			<main className="grid content-center min-h-screen justify-center">
				<Button>Agregar hijo</Button>
			</main>
		</div>
	);
}
