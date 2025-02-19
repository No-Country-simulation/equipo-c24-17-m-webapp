import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [Google],
	callbacks: {
		async signIn({ profile }) {
			if (!profile?.email) {
				throw new Error("Perfil de google no encontrado.");
			}

			//TODO : guardar usuario en la base de datos, si es que no existe

			return true;
		},
	},
});
