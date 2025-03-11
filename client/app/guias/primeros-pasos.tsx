import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleAlert } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function PrimerosPasos() {
	return (
		<section
			id="pasos"
			className="container max-w-[90%] mx-auto lg:max-w-[1100px] py-10 lg:py-20"
		>
			<div className="flex flex-col md:flex-row lg:gap-14 justify-center items-center gap-8">
				<div className="">
					<Image
						src={"/primeros-pasos.svg"}
						alt="nene abrazandose"
						className=" max-w-[200px] md:max-w-[400px]  z-20"
						height={500}
						width={340}
					/>
				</div>
				<div className="space-y-2">
					<h2 className=" text-xl lg:text-2xl  text-blueCl  font-bold  font-rowdies ">
						Hablemos de los especialistas principales.
					</h2>
					<p>
						Si notaste que tu hijo tiene comportamientos diferentes a los
						esperados para su edad, lo primero que debes hacer es hablar con su
						pediatra.{" "}
						<strong>
							Detectar el TEA a tiempo puede marcar la diferencia en el acceso a
							tratamientos y acompañamiento adecuado.
						</strong>{" "}
					</p>
					<div className="flex flex-col  gap-4">
						<Card className="bg-blueCl text-white">
							<CardHeader>
								<CardTitle>Si tenés obra social: </CardTitle>
							</CardHeader>
							<CardContent>Pedí turno con un neurólogo infantil.</CardContent>
						</Card>
						<Card className="bg-blueCl text-white">
							<CardHeader>
								<CardTitle> Si NO tenés cobertura: </CardTitle>
							</CardHeader>
							<CardContent>
								Podés solicitar una derivación en un hospital público.
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
			<div className="bg-yellow-200  p-4 border-l-4 border-l-orange-400 space-y-2  my-8">
				<div className="flex items-center gap-2">
					<CircleAlert /> <p className="font-semibold">Importante</p>
				</div>
				<p>
					Los turnos con neurólogos suelen demorar meses. Pedí el turno lo antes
					posible.
				</p>
			</div>
		</section>
	);
}
