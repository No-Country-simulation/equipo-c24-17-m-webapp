import { signOut } from "@/auth";
import { Button } from "./ui/button";

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
				className="w-full bg-[#7596cc] hover:bg-[#7596cc] hover:text-white hover:opacity-80  border-none"
			>
				Cerrar Sesión
			</Button>
		</form>
	);
}
