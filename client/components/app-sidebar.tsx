import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
} from "@/components/ui/sidebar";
import SidebarMain from "./sidebar-menu";
import { getSession } from "@/lib/database";
import Image from "next/image";

export async function AppSidebar() {
	const { email, imagen, nombre } = await getSession();
	return (
		<Sidebar>
			<SidebarHeader>
				<div className="text-black flex flex-col items-center space-y-2 mt-8">
					<Image
						src={imagen}
						alt={nombre}
						width={60}
						height={60}
						className="rounded-full"
					/>
					<p className=" font-bold">
						Hola {nombre.substring(0, nombre.indexOf(" "))}
					</p>
					<p> {email}</p>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarMain />
			</SidebarContent>
		</Sidebar>
	);
}
