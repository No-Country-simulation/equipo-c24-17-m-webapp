import { CircleAlert } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Cud() {
	return (
		<section
			id="cud"
			className="container max-w-[90%] mx-auto lg:max-w-[1100px] py-10 lg:py-20"
		>
			<h1 className="text-2xl text-blueCl font-rowdies  text-center md:text-4xl py-5">
				Tenemos el resultado, ¿qué sigue ahora?
			</h1>
			<div className="flex flex-col md:flex-row lg:gap-14 justify-center items-center gap-8 pt-8">
				<div className="">
					<Image
						src={"/cud.svg"}
						alt="nene abrazandose"
						className=" max-w-[200px] md:max-w-[400px]  z-20"
						height={500}
						width={340}
					/>
				</div>
				<div className="space-y-2">
					<h2 className=" text-xl lg:text-2xl   text-verdeCl  font-bold  font-rowdies ">
						Próximos pasos con el diagnóstico recibido.
					</h2>
					<p>
						El CUD es un documento oficial que acredita la condición de
						discapacidad
						<strong>
							{" "}
							¿Por qué es importante? Garantiza acceso a tratamientos y terapias
							sin costo, permite cobertura total de medicamentos y estudios
							médicos,
						</strong>{" "}
						facilita la inclusión en el sistema educativo con apoyo escolar,
						brinda acceso a transporte gratuito y otros beneficios. Un neurólogo
						indicará pruebas para evaluar si tu hijo está dentro del espectro
						autista.{" "}
					</p>
					<div className="flex flex-col  gap-4">
						<Card className="bg-verdeCl text-white">
							<CardContent className="pt-4">
								<strong>Documentación necesaria: </strong>
								DNI del niño y del adulto responsable. Partida de nacimiento.
								Informe médico con diagnóstico.
							</CardContent>
						</Card>
						<Card className="bg-verdeCl text-white">
							<CardContent className="pt-4">
								<strong>¿Dónde se tramita? </strong>
								En la Junta Evaluadora de Discapacidad de tu municipio.
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
					La carpeta que debes presentar en la administración del centro donde
					van a evaluar si tu hijo es apto para recibir el CUD debe contener los
					siguientes documentos:
				</p>
				<div className="flex flex-col gap-2 md:flex-row text-sm md:gap-4">
					<ul className="space-y-2 lg:w-1/2">
						<li className="flex  items-center gap-2">
							{" "}
							<div className="bg-black rounded-full min-w-2 min-h-2"></div>{" "}
							<p>DNI del adulto a cargo. (original y fotocopia)</p>{" "}
						</li>
						<li className="flex  items-center gap-2">
							<div className="bg-black rounded-full min-w-2 min-h-2"></div>{" "}
							<p>DNI de la persona que será evaluada (original y fotocopia)</p>{" "}
						</li>
						<li className="flex  items-center gap-2">
							{" "}
							<div className="bg-black rounded-full min-w-2 min-h-2"></div>{" "}
							<p>
								Partida de nacimiento. (original y fotocopia) en caso de no
								contar con el nuevo DNI
							</p>{" "}
						</li>
						<li className="flex  items-center gap-2">
							{" "}
							<div className="bg-black rounded-full min-w-2 min-h-2"></div>{" "}
							<p>
								Si poseés Informe escolar, en el caso de que vaya a la escuela.
							</p>{" "}
						</li>
					</ul>
					<ul className="space-y-2 lg:w-1/2">
						<li className="flex  items-center gap-2">
							{" "}
							<div className="bg-black rounded-full min-w-2 min-h-2"></div>{" "}
							<p>
								Certificado médico completo y/o Resumen de historia clínica
								original (de no más de 12 meses) especificando:
							</p>{" "}
						</li>
						<li className="flex  items-center gap-2">
							{" "}
							<p>
								<strong>1 -</strong> Diagnóstico principal
							</p>{" "}
						</li>
						<li className="flex  items-center gap-2">
							{" "}
							<p>
								{" "}
								<strong>2 -</strong>Antecedentes de la enfermedad y tiempo de
								evolución
							</p>{" "}
						</li>
						<li className="flex  items-center gap-2">
							{" "}
							<p>
								<strong>3 -</strong>Estado actual y secuelas
							</p>{" "}
						</li>
						<li className="flex  items-center gap-2">
							{" "}
							<p>
								{" "}
								<strong>4 -</strong>Tratamientos farmacológicos y/o
								rehabilitación
							</p>{" "}
						</li>
						<li className="flex  items-center gap-2">
							{" "}
							<p>
								<strong>5 -</strong> Firma y sello del médico y/o equipo
								tratante.
							</p>{" "}
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
