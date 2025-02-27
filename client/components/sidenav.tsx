import { CerrarSesion } from "@/components/cerrar-sesion";
import { Card } from "@/components/ui/card";
import SidebarLinks from "./sidebar-links";
import Image from "next/image";

export default function SideNav({
	email,
	nombre,
	imagen,
}: {
	email: string;
	nombre: string;
	imagen: string;
}) {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2  rounded-tl-none rounded-bl-none space-y-1">
			<Card className=" flex flex-col gap-2 items-center h-32  rounded-md p-4 md:h-40 bg-[#6D89CF]">
				<Image
					src={imagen}
					alt={nombre}
					width={60}
					height={60}
					className="rounded-full"
				/>
				<p className="text-white ">
					Hola {nombre.substring(0, nombre.indexOf(" "))}
				</p>
				<p className="text-white "> {email}</p>
			</Card>
			<SidebarLinks />
			<Card className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 bg-[#6D89CF] pb-2">
				<div></div>
				<div className="mb-2"></div>
			</Card>
			<CerrarSesion />
		</div>
	);
}
