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
					<ul className="flex flex-col justify-start items-center gap-4 text-2xl">
						{" "}
						<li className="">
							{" "}
							<Button variant={"TDAMobile"}>
								<Hand size={35} />{" "}
								<Link href={"/"} className=" font-bold">
									Conocenos{" "}
								</Link>{" "}
							</Button>{" "}
						</li>{" "}
						<li className="">
							{" "}
							<Button variant={"TDAMobile"}>
								<House size={35} />{" "}
								<Link href={"/"} className="font-bold">
									Comunidad{" "}
								</Link>{" "}
							</Button>{" "}
						</li>{" "}
						<li className="">
							{" "}
							<Button variant={"TDAMobile"}>
								<MessageCircleQuestion size={35} />{" "}
								<Link href={"/"} className="font-bold">
									FAQs{" "}
								</Link>{" "}
							</Button>{" "}
						</li>{" "}
					</ul>
				</div>

				<SheetFooter>
					<Button className="bg-[#3662C1] hover:bg-[#294a91] justify-center items-center ">
						<LogIn size={16} />
						<Link href={"/login"}>Iniciar Sesión</Link>
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
