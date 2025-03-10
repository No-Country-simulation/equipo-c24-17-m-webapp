"use client";

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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ParienteT } from "@/lib/definitions";

export default function SidebarMain({
	familiares,
}: {
	familiares: ParienteT[];
}) {
	const path = usePathname();

	return (
		<SidebarGroup>
			<SidebarGroupLabel>Accesos</SidebarGroupLabel>
			<SidebarMenu>
				<SidebarMenuButton className="" asChild isActive={path === "/panel"}>
					<Link href={`/panel/`}>Inicio</Link>
				</SidebarMenuButton>
			</SidebarMenu>
			<SidebarMenu>
				<Collapsible className="group/collapsible">
					<CollapsibleTrigger asChild>
						<SidebarMenuButton
							className=""
							asChild
							isActive={path === "/panel/familiares"}
						>
							<Link href={`/panel/familiares`}>
								Familiares
								<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
							</Link>
						</SidebarMenuButton>
					</CollapsibleTrigger>
					<CollapsibleContent>
						<SidebarMenuSub>
							{familiares.map(({ id, nombre, apellido }) => (
								<SidebarMenuSubItem key={id}>
									<SidebarMenuSubButton
										asChild
										isActive={path.includes(`/panel/familiares/${id}`)}
									>
										<Link href={`/panel/familiares/${id}/incidencias`}>
											{apellido}, {nombre}
										</Link>
									</SidebarMenuSubButton>
								</SidebarMenuSubItem>
							))}
						</SidebarMenuSub>
					</CollapsibleContent>
				</Collapsible>
			</SidebarMenu>
		</SidebarGroup>
	);
}
