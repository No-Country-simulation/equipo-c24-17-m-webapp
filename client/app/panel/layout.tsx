import SideNav from "@/components/sidenav";
import { getSession } from "@/lib/database";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
	const { email, imagen, nombre } = await getSession();
	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-bgSoftCl">
			<div className="w-full flex-none md:w-64">
				<SideNav email={email} nombre={nombre} imagen={imagen} />
			</div>
			<div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
		</div>
	);
}
