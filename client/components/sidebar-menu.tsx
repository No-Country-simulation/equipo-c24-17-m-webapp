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
import { cn } from "@/lib/utils";

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
					<Link href={`/panel/`}>Información Inicial</Link>
				</SidebarMenuButton>
			</SidebarMenu>
			<SidebarMenu>
				<Collapsible
					className="group/collapsible"
					open={path.includes(`/panel/familiares`)}
				>
					<CollapsibleTrigger asChild>
						<SidebarMenuButton
							className=""
							asChild
							isActive={path === "/panel/familiares"}
						>
							<Link href={`/panel/familiares`}>
								Familiares cargados
								<ChevronRight
									className={cn(
										"ml-auto transition-transform duration-200 ",
										path.includes("/panel/familiares") && "rotate-90"
									)}
								/>
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
