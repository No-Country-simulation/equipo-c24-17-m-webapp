import { signIn } from "@/auth";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function IniciarSesion() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("google", { redirectTo: "/panel" });
			}}
		>
			<Button variant={"outline"} type="submit">
				Iniciar Sesión{" "}
				<Image
					src={"/google-icon.svg"}
					alt="google logo"
					width={20}
					height={20}
				/>
			</Button>
		</form>
	);
}
