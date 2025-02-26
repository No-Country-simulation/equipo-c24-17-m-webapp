import Link from "next/link";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";

export function NavDesktot() {
	return (
		<nav className="flex items-center py-6">
			<div className=" transition-all hidden md:flex">
				<ul className="grid grid-cols-3 gap-3 font-semibold">
					<li className="">
						<Button variant={"link"}>
							<Link href={"/"} className="font-semibold">
								Conocenos
							</Link>
						</Button>
					</li>
					<li className="">
						<Button variant={"link"}>
							<Link href={"/"} className="font-semibold">
								Comunidad
							</Link>
						</Button>
					</li>
					<li className="">
						<Button variant={"link"}>
							<Link href={"/"} className="font-semibold">
								FAQs
							</Link>
						</Button>
					</li>
				</ul>
			</div>

			<div>
				<Button className="bg-[#3662C1] hover:bg-[#294a91] justify-center items-center hidden md:flex">
					<LogIn size={16} />
					<Link href={"/login"}>Iniciar Sesión</Link>
				</Button>
			</div>
		</nav>
	);
}
