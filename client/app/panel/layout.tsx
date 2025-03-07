import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="w-full bg-bgSoftCl">
				<SidebarTrigger className="text-blueStrongCl hover:text-blueStrongCl" />
				{children}
			</main>
		</SidebarProvider>
	);
}
