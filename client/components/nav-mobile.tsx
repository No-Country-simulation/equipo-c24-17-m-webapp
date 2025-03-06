"use client";

import {
	Hand,
	House,
	LogIn,
	MenuIcon,
	MessageCircleQuestion,
} from "lucide-react";
import React from "react";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";

export default function NavMobile() {
	return (
		<Sheet>
			<SheetTrigger asChild className=" md:hidden">
				<Button
					variant={"outline"}
					className="bg-[#FAEDDA] border border-slate-700  hover:bg-stone-100"
				>
					<MenuIcon size={12} />
				</Button>
			</SheetTrigger>

			<SheetContent className="space-y-4 capitalize py-20 flex flex-col justify-between bg-[#4F89EC]">
				<SheetTitle className="text-center text-white text-3xl">
					TEAcompaña
				</SheetTitle>

				<div>
					<ul className="flex flex-col justify-start items-center gap-4  text-white">
						{" "}
						<li className="">
							{" "}
							<Link href={"/"} className=" font-bold flex items-center gap-2">
								<Hand size={20} /> <span>Conocenos</span>
							</Link>{" "}
						</li>{" "}
						<li className="">
							{" "}
							<Link href={"/comunidad"} className="font-bold flex items-center gap-2">
								<House size={20} /> <span>Comunidad</span>
							</Link>{" "}
						</li>{" "}
						<li className="">
							{" "}
							<Link href={"/"} className="font-bold flex items-center gap-2">
								<MessageCircleQuestion size={20} /> <span>FAQ</span>
							</Link>{" "}
						</li>{" "}
					</ul>
				</div>

				<SheetFooter>
					<Button className="bg-[#3662C1] hover:bg-[#294a91] ">
						<Link
							href={"/login"}
							className="text-white flex items-center gap-2"
						>
							<LogIn size={16} /> Iniciar Sesión
						</Link>
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
