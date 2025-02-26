import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUsuario } from "./lib/database";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [Google],
	secret: process.env.AUTH_SECRET,
	callbacks: {
		async signIn({ profile }) {
			if (!profile?.email) {
				throw new Error("Perfil de google no encontrado.");
			}

			const name = profile.name || "";
			const picture = profile.picture || "";
			await createUsuario(name, profile.email, picture);

			return true
		},
	},
});