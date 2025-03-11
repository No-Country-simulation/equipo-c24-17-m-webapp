import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Unirme() {
	return (
		<section className="container max-w-[90%] mx-auto lg:max-w-[1100px] text-center py-10 lg:py-20 lg:pb-32 space-y-2">
			<h1 className="text-2xl text-blueCl font-rowdies  md:text-4xl">
				¡No estas solo!
			</h1>
			<p className="max-w-[400px] mx-auto">
				Te acompañamos en este camino. Sumate a nuestra comunidad y conectá con
				otros padres en esta misma situación.{" "}
			</p>
			<Button className=" bg-gradient-to-r  from-fucCl  to-yellowCl rounded-3xl  transition-colors py-5 px-4 my-2 hover:opacity-80 font-semibold text-white tracking-wide">
				<Link href={"/comunidad"} className="flex items-center ">
					<span>UNIRME A LA COMUNIDAD</span> <ChevronRight />{" "}
				</Link>
			</Button>
		</section>
	);
}
