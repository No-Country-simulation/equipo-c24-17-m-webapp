import { signOut } from "@/auth";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export function CerrarSesion() {
	return (
		<form
			action={async () => {
				"use server";
				await signOut({ redirectTo: "/" });
			}}
		>
			<Button
				variant={"outline"}
				type="submit"
				className="w-full text-blueStrongCl bg-lightBlueCl hover:bg-lightBlueCl hover:text-blueStrongCl hover:opacity-90  border-none"
			>
				Cerrar Sesión
				<LogOut className="" />
			</Button>
		</form>
	);
}
