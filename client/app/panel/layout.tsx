import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ReactNode } from "react";
import Image from "next/image";

export default async function Layout({ children }: { children: ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="w-full bg-bgSoftCl">
				<SidebarTrigger className="text-blueStrongCl hover:text-blueStrongCl" />
				<header className="  justify-start hidden lg:flex ml-8 py-3">
					<Image
						src={"/logoFidelidad.svg"}
						alt="Logo TEA"
						width={140}
						height={60}
					/>
				</header>
				{children}
			</main>
		</SidebarProvider>
	);
}
