import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Homepage() {
	return (
		<main className="bg-[#FAEDDA] pt-20 pb-4  lg:pb-10 relative">
			<div className="container max-w-[90%] mx-auto lg:max-w-[1000px]">
				<h1 className="text-3xl text-[#6D89CF] font-bold text-start mb-4 sm:hidden">
					Junto a vos en cada paso
				</h1>
				<div className="flex md:items-start md:justify-center">
					<div className="w-2/3 md:w-1/2 md:max-w-[500px] md:mt-20">
						<h1 className="hidden sm:block text-4xl md:text-5xl text-[#6D89CF]  font-bold text-start mb-4">
							Junto a vos en cada paso
						</h1>
						<p className="text-[#FC9290] font-semibold text-start text-sm sm:py-4 md:text-base">
							Estamos aquí para acompañarte en este camino, conectando familias
							y profesionales con un mismo objetivo: mejorar la calidad de vida
							de quienes viven con TEA.
						</p>

						<Button className="bg-[#F9326A] rounded-3xl py-5 my-2 hover:opacity-80">
							Contenido de apoyo
						</Button>
					</div>

					<div className="w-1/3 md:w-1/2 flex justify-end">
						<Image
							src={"/nene.svg"}
							alt="nene abrazandose"
							className=""
							height={500}
							width={330}
						/>
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 xl:-bottom-32 2xl:-bottom-56">
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
					className="hidden xl:block w-full object-cover "
				/>
			</div>
		</main>
	);
}
