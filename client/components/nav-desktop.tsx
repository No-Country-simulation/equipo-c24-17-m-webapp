import Link from "next/link";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";

export function NavDesktot() {
	return (
		<nav className="flex items-center gap-10 py-6">
			<div className=" transition-all hidden md:flex">
				<ul className="flex items-center justify-start gap-10 text-[#333]">
					<li>
						<Link href={"/"} className="font-semibold hover:opacity-70">
							Conocenos
						</Link>
					</li>
					<li>
						<Link href={"/"} className="font-semibold hover:opacity-70">
							Comunidad
						</Link>
					</li>
					<li>
						<Link href={"/"} className="font-semibold hover:opacity-70">
							FAQs
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<Button className="bg-[#3662C1] hover:bg-[#294a91] hidden md:flex ">
					<Link
						href={"/login"}
						className=" md:flex gap-2 justify-between items-center "
					>
						{" "}
						<LogIn size={16} />
						Iniciar Sesión
					</Link>
				</Button>
			</div>
		</nav>
	);
}
