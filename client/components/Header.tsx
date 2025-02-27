"use client";

import Link from "next/link";
import Image from "next/image";
import TEAcompaña from "@/public/TEAcompaña.png";
import IMGLogo from "@/public/Group.png";
import { NavDesktot } from "./nav-desktop";
import NavMobile from "./nav-mobile";

export default function Header() {
	return (
		<header className="bg-[#FAEDDA] py-4 gap-4 ">
			<div className="container mx-auto max-w-[90%] md:max-w-[1100px] flex justify-between items-center">
				<div className="flex gap-2 justify-center items-center">
					<Link href={"/#"}>
						<Image src={IMGLogo} alt="Logo TEA" width={60} height={60} />
					</Link>
					<Link href="/#">
						<Image
							src={TEAcompaña}
							alt="Web Name - TEAcompania"
							width={130}
							height={60}
							className="hidden md:block"
						/>
					</Link>
				</div>

				<NavDesktot />
				<NavMobile />
			</div>
		</header>
	);
}
