import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Showcase() {
	return (
		<main className="bg-bgSoftCl pt-20 pb-4  lg:pb-10 relative ">
			<div className="container max-w-[90%] mx-auto lg:max-w-[1000px] ">
				<h1 className="text-3xl text-blueCl font-bold text-start mb-2 sm:hidden font-rowdies ">
					Junto a vos en cada paso
				</h1>
				<div className="flex md:items-start md:justify-center ">
					<div className="w-2/3 md:w-1/2 md:max-w-[500px] md:mt-15 lg:space-y-6 ">
						<h1 className="hidden sm:block text-4xl md:text-5xl  xl:text-7xl text-blueCl  font-bold text-start mb-4 font-rowdies relative z-30">
							Junto a vos en cada paso
						</h1>
						<p className="text-darkCl font-semibold text-start text-sm sm:py-4 md:text-base relative z-30">
							Una web diseñada para facilitar la organización diaria de tu hijo
							o familiar con TEA, con calendario de terapias, consultas,
							registro de incidencias, guías informativas y más.
						</p>

						<Button className=" bg-gradient-to-r  from-fucCl  to-yellowCl rounded-3xl  transition-colors py-5 px-4 my-2 hover:opacity-80 font-semibold text-white tracking-wide">
							<Link href={"/guias"}>CONOCÉ NUESTRAS GUÍAS</Link>
						</Button>
					</div>

					<div className="w-1/3 md:w-1/2 flex justify-end lg:justify-center relative overflow-visible">
						<Image
							src={"https://res.cloudinary.com/dnvmyjbik/image/upload/f_auto,q_auto/v1/TEA-Project/jhf5kbvyme0cii7fy4pr"}
							alt="nene abrazandose"
							className=" lg:min-h-[500px] z-20 translate-y-[20px]"
							height={500}
							width={340}
						/>
						<Image
							src={"/homeBg.svg"}
							alt="nene abrazandose"
							className="hidden lg:block  absolute bottom-0 right-0 lg:min-h-[800px] lg:min-w-[800px]  lg:-bottom-20 xl:-right-20 z-10 overflow-hidden object-contain"
							height={800}
							width={800}
						/>
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 z-20 xl:-bottom-2  2xl:-bottom-6">
				<Image
					src={"https://res.cloudinary.com/dnvmyjbik/image/upload/f_auto,q_auto/v1/TEA-Project/gzxpf3qwd2gnip3zez7v"}
					alt="nube banner"
					height={400}
					width={1400}
					className="xl:hidden w-full object-cover"
				/>
				<Image
					src={"https://res.cloudinary.com/dnvmyjbik/image/upload/f_auto,q_auto/v1/TEA-Project/oe3dqxi5vwyuoeagpnij"}
					alt="nube banner"
					height={400}
					width={1400}
					className="hidden xl:block w-full object-cover"
				/>
			</div>
		</main>
	);
}
