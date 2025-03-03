import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Showcase() {
	return (
		<main className="bg-bgSoftCl pt-20 pb-4  lg:pb-10 relative ">
			<div className="container max-w-[90%] mx-auto lg:max-w-[1000px] ">
				<h1 className="text-3xl text-blueCl font-bold text-start mb-4 sm:hidden font-rowdies ">
					Junto a vos en cada paso
				</h1>
				<div className="flex md:items-start md:justify-center ">
					<div className="w-2/3 md:w-1/2 md:max-w-[500px] md:mt-15 lg:space-y-6 ">
						<h1 className="hidden sm:block text-4xl md:text-5xl  xl:text-7xl text-blueCl  font-bold text-start mb-4 font-rowdies relative z-30">
							Junto a vos en cada paso
						</h1>
						<p className="text-darkCl font-semibold text-start text-sm sm:py-4 md:text-base relative z-30">
							Estamos aquí para acompañarte en este camino, conectando familias
							y profesionales con un mismo objetivo: mejorar la calidad de vida
							de quienes viven con TEA.
						</p>

						<Button className=" bg-gradient-to-r  from-fucCl  to-yellowCl rounded-3xl  transition-colors py-5 px-4 my-2 hover:opacity-80 font-semibold text-white tracking-wide">
							<Link href={"/guia"}>CONOCÉ NUESTRAS GUÍAS</Link>
						</Button>
					</div>

					<div className="w-1/3 md:w-1/2 flex justify-end lg:justify-center relative">
						<Image
							src={"/nene.svg"}
							alt="nene abrazandose"
							className=" lg:min-h-[500px] z-20"
							height={500}
							width={330}
						/>
						<Image
							src={"/homeBg.svg"}
							alt="nene abrazandose"
							className="hidden lg:block  absolute bottom-0 right-0 lg:min-h-[800px] lg:min-w-[800px]  lg:-bottom-20 lg:-right-20 z-10"
							height={800}
							width={800}
						/>
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 xl:-bottom-32 2xl:-bottom-56 z-40">
				<Image
					src={"/nube.svg"}
					alt="nene abrazandose"
					height={400}
					width={1400}
					className="xl:hidden w-full object-cover "
				/>
				<Image
					src={"/nube-xl.svg"}
					alt="nene abrazandose"
					height={400}
					width={1400}
					className="hidden xl:block w-full object-cover  "
				/>
			</div>
		</main>
	);
}
