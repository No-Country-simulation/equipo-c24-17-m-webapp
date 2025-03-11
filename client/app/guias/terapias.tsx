import { CircleAlert } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Terapias() {
	return (
		<section
			id="terapia"
			className="container max-w-[90%] mx-auto lg:max-w-[1100px]  py-10 lg:py-20"
		>
			<h1 className="text-2xl text-blueCl font-rowdies  text-center md:text-4xl">
				Poseo el diagnóstico y certificado único de discapacidad (CUD) de mi
				hijo, ¿ahora que puedo hacer?
			</h1>
			<div className="flex flex-col-reverse md:flex-row-reverse lg:gap-14 justify-center items-center gap-8 pt-8 ">
				<div className="">
					<Image
						src={"/terapia.svg"}
						alt="nene abrazandose"
						className=" max-w-[200px] md:max-w-[400px]  z-20"
						height={500}
						width={340}
					/>
				</div>
				<div className="space-y-2">
					<h2 className=" text-xl lg:text-2xl  text-marronCl  font-bold  font-rowdies ">
						Que continúa…
					</h2>
					<p>
						Una vez obtenido el diagnóstico y el cud, el  neurólogo te va a
						entregar una planilla con las TERAPIAS que deberá realizar tu hijo,
						el siguiente paso es comenzar con las terapias adecuadas.
						<strong>Cada niño con TEA es único</strong>, y las terapias se
						adaptan a sus necesidades específicas para potenciar su desarrollo y
						bienestar. Es normal sentirte abrumado,{" "}
						<strong>no estás solo en este camino.</strong>
					</p>
					<div className="flex flex-col  gap-4">
						<Card className="bg-marronCl text-white">
							<CardContent className="pt-4">
								<strong>Algunas de las terapias: </strong>
								Terapia Ocupacional. Fonoaudiología. Psicología y acomp.
								terapéutico. Integración escolar, etc.
							</CardContent>
						</Card>
						<Card className="bg-marronCl text-white">
							<CardContent className="pt-4">
								<strong>Con el diagnóstico, el CUD y la orden médica</strong>,
								ya podés gestionar un centro de rehabilitación para comenzar las
								sesiones.
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
					Acordate que con el CUD{" "}
					<strong>¡todas las terapias son gratuitas!</strong> Es un derecho
					garantizado
				</p>
			</div>
		</section>
	);
}
