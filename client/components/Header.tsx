"use client";

import Link from "next/link";
import Image from "next/image";
import { NavDesktot } from "./nav-desktop";
import NavMobile from "./nav-mobile";

export default function Header() {
	return (
		<header className="bg-bgSoftCl py-4 gap-4 relative z-50">
			<div className="container mx-auto max-w-[90%] xl:max-w-[1100px] flex justify-between items-center">
				<div className="flex gap-2 justify-center items-center">
					<Link href={"/#"}>
						<Image src={"/logo.svg"} alt="Logo TEA" width={240} height={60} />
					</Link>
				</div>

				<NavDesktot />
				<NavMobile />
			</div>
		</header>
	);
}
