import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function ShowcaseGuias() {
	return (
		<main>
			<section className="container max-w-[90%] mx-auto lg:max-w-[1100px] py-20 lg:py-32">
				<div className="flex flex-col md:flex-row  ">
					<div className=" md:max-w-[500px]  lg:space-y-4 mt-8 ">
						<h1 className=" text-3xl md:text-4xl  xl:text-5xl text-blueCl  font-bold text-start  font-rowdies relative z-30">
							Primeros Pasos en el Diagnóstico del TEA
						</h1>
						<p className="text-darkCl font-semibold text-start text-sm md:text-base relative z-30">
							Bienvenidos a esta guía paso a paso para familias en busca de
							respuestas. Sabemos que este camino puede parecer largo y
							abrumador, pero no estás solo, te explicamos paso a paso cómo
							proceder desde que aparecen las primeras dudas hasta que tu hijo
							recibe el diagnóstico y comienza las terapias.
						</p>
					</div>

					<div className=" mx-auto flex justify-center lg:justify-center relative overflow-visible">
						<Image
							src={"/corazon.svg"}
							alt="nene abrazandose"
							className="max-w-[200px] md:max-w-[430px] z-20"
							height={500}
							width={340}
						/>
					</div>
				</div>
			</section>
			<section className="container max-w-[90%] mx-auto lg:max-w-[1100px]">
				<div className="flex flex-wrap justify-center gap-4 lg:gap-8 ">
					<Button
						variant={"outline"}
						className="text-verdeCl font-bold hover:bg-verdeCl hover:text-white"
					>
						{" "}
						<Link href={"#pasos"} className="lg:text-xl">
							Primeros pasos
						</Link>
					</Button>
					<Button
						variant={"outline"}
						className="text-verdeCl font-bold hover:bg-verdeCl hover:text-white"
					>
						{" "}
						<Link href={"#diagnostico"} className="lg:text-xl">
							El diagnostico
						</Link>
					</Button>
					<Button
						variant={"outline"}
						className="text-verdeCl font-bold hover:bg-verdeCl hover:text-white"
					>
						{" "}
						<Link href={"#cud"} className="lg:text-xl">
							Tramitar el CUD
						</Link>
					</Button>
					<Button
						variant={"outline"}
						className="text-verdeCl font-bold hover:bg-verdeCl hover:text-white"
					>
						{" "}
						<Link href={"#terapia"} className="lg:text-xl">
							Las terapias
						</Link>
					</Button>
				</div>
			</section>
		</main>
	);
}
