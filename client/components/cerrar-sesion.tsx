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
			<Button variant={"outline"} type="submit">
				Cerrar Sesión
			</Button>
		</form>
	);
}
