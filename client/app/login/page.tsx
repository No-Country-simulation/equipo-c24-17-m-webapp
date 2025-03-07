import IniciarSesion from "@/components/iniciar-sesion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function page() {
	return (
		<div className="  flex items-center justify-center min-h-screen gap-12 bg-blueCl ">
			<div className="hidden md:flex w-1/2  justify-end self-end">
				<Image
					src={"/nena.svg"}
					alt="niña con rompecabezas"
					width={550}
					height={780}
				/>
			</div>
			<div className="md:w-1/2">
				<Card className="max-w-[400px]">
					<CardHeader>
						<CardTitle className="text-center font-normal text-2xl  tracking-wide">
							Bienvenidos a
						</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col items-center text-center gap-6">
						<Image src="/logo.svg" alt="" width={180} height={200} />
						<p>
							Podes registrarte con una cuenta de gmail para poder formar parte
							de este espacio y acompañarte día a día
						</p>
						<div className="bg-[#5881C1] opacity-60 rounded-full w-20 h-20 text-white flex items-center justify-center">
							<User className="text-white w-10 h-10" size={20} />
						</div>

						<IniciarSesion />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
