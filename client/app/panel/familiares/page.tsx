import { Button } from "@/components/ui/button";
import React from "react";
import CardPariente from "./card-pariente";
import Link from "next/link";
import { getParientes, getSession } from "@/lib/database";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus } from "lucide-react";

export default async function page() {
	const sesion = await getSession();
	const parientes = await getParientes(sesion.email);

	return (
		<div className="">
			<main className="grid content-center min-h-screen justify-center gap-8">
				{parientes.map((item) => (
					<CardPariente
						key={item.id}
						pariente={item}
						correoUsuario={sesion.email}
					/>
				))}

				<Card className="max-w-[390px]">
					<CardHeader>
						<CardTitle className="text-xl font-normal">Añadir Perfil</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col items-center">
						<p>
							Cargar un nuevo perfil de registro aquí. Podrás llevar un registro
							de las terapias, las medicaciones, los turnos, los estudios
							médicos y mucho más.{" "}
						</p>
						<Button className=" gap-0  rounded-full h-12 w-12 bg-blueCl text-white hover:bg-blueCl hover:opacity-80 ">
							<Link
								href={`/panel/familiares/crear`}
								className="flex flex-col items-center justify-center"
							>
								<UserPlus className="w-7 h-7 text-white" />{" "}
							</Link>
						</Button>
					</CardContent>
				</Card>
			</main>
		</div>
	);
}
