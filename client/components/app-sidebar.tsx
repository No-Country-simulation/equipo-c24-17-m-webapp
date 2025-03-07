import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import SidebarMain from "./sidebar-menu";
import { getParientes, getSession } from "@/lib/database";
import Image from "next/image";
import { CerrarSesion } from "./cerrar-sesion";

export async function AppSidebar() {
	const { email, imagen, nombre } = await getSession();
	const familiares = await getParientes(email);
	return (
		<Sidebar>
			<SidebarHeader>
				<div className="text-white flex flex-col items-center space-y-2 mt-8">
					<Image
						src={imagen}
						alt={nombre}
						width={60}
						height={60}
						className="rounded-full"
					/>
					<p className="font-bold">
						Hola {nombre.substring(0, nombre.indexOf(" "))}
					</p>
					<p className="opacity-90"> {email}</p>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarMain familiares={familiares} />
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<CerrarSesion />
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
