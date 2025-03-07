import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ChevronRight } from "lucide-react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./ui/collapsible";
import { getParientes, getSession } from "@/lib/database";
import Link from "next/link";

export default async function SidebarMain() {
	const { email } = await getSession();
	const familiares = await getParientes(email);
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Accesos</SidebarGroupLabel>
			<SidebarMenu>
				<SidebarMenuButton className="border-full bg-blueCl text-white hover:bg-blueCl hover:text-white hover:opacity-80">
					<Link href={`/panel/familiares`}>Inicio</Link>
				</SidebarMenuButton>
			</SidebarMenu>
			<SidebarMenu>
				<Collapsible className="group/collapsible">
					<CollapsibleTrigger asChild>
						<SidebarMenuButton className="border-full bg-blueCl text-white hover:bg-blueCl hover:text-white hover:opacity-80">
							Familiares
							<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
						</SidebarMenuButton>
					</CollapsibleTrigger>
					<CollapsibleContent>
						<SidebarMenuSub>
							{familiares.map(({ id, nombre, apellido }) => (
								<SidebarMenuSubItem key={id}>
									<SidebarMenuSubButton asChild>
										<Link href={`/panel/familiares/${id}`}>
											{apellido}, {nombre}
										</Link>
									</SidebarMenuSubButton>
								</SidebarMenuSubItem>
							))}
							<SidebarMenuSubItem>
								<SidebarMenuSubButton asChild>
									<Link href={`/panel/familiares/crear`}>Agregar Familiar</Link>
								</SidebarMenuSubButton>
							</SidebarMenuSubItem>
						</SidebarMenuSub>
					</CollapsibleContent>
				</Collapsible>
			</SidebarMenu>
		</SidebarGroup>
	);
}
