"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UsersIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
export const links = [
	{ name: "Familiares", href: "/panel", icon: UsersIcon },

	{ name: "Perfil", href: "/panel/perfil", icon: User2Icon },
];

export default function SidebarLinks() {
	const pathName = usePathname();
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Button
						key={link.name}
						className={cn(
							"bg-[#6D89CF] text-white hover:bg-[#6D89CF] hover:opacity-80",
							pathName === link.href &&
								"bg-white border text-black hover:text-white"
						)}
					>
						<Link
							href={link.href}
							className="flex items-center gap-2 justify-start w-full font-semibold"
						>
							<LinkIcon className="w-6" />
							<p className="hidden md:block">{link.name}</p>
						</Link>
					</Button>
				);
			})}
		</>
	);
}
