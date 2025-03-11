import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Diagnostico() {
	return (
		<section
			id="diagnostico"
			className="container max-w-[90%] mx-auto lg:max-w-[1100px] py-10 lg:py-20"
		>
			<div className="flex flex-col-reverse md:flex-row-reverse lg:gap-14 justify-center items-center gap-8">
				<div className="">
					<Image
						src={"/diagnostico.svg"}
						alt="nene abrazandose"
						className=" max-w-[200px] md:max-w-[400px]  z-20"
						height={500}
						width={340}
					/>
				</div>
				<div className="space-y-2">
					<h2 className=" text-xl lg:text-2xl  text-grisCl  font-bold  font-rowdies ">
						Las evaluaciones.
					</h2>
					<p>
						El diagnóstico de TEA es clínico y se realiza a través de la
						evaluación de especialistas en desarrollo infantil. No existe un
						único estudio médico que determine el TEA, sino que se basa en
						observaciones y pruebas específicas.
						<strong>
							Un neurólogo indicará pruebas para evaluar si tu hijo está dentro
							del espectro autista.
						</strong>{" "}
					</p>
					<div className="flex flex-col  gap-4">
						<Card className="bg-grisCl text-white">
							<CardContent className="pt-4">
								<strong>ADOS: </strong> Observa la interacción social y
								comunicación del niño.
							</CardContent>
						</Card>
						<Card className="bg-grisCl text-white">
							<CardContent className="pt-4">
								<strong>ADI-R: </strong> Entrevista a los padres para evaluar el
								desarrollo del niño.
							</CardContent>
						</Card>
						<Card className="bg-grisCl text-white">
							<CardContent className="pt-4">
								<strong>Otros estudios: </strong>
								Fonoaudiología, psicopedagogía y psicología.
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
