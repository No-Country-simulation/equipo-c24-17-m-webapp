"use server";

import { actualizarIncidencia, eliminarIncidencia } from "@/lib/database";
import { incidenciaSchema } from "@/lib/schemas";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createServerAction } from "zsa";

export const actualizarIncidenciaAction = createServerAction()
	.input(incidenciaSchema)
	.handler(async ({ input }) => {
		await actualizarIncidencia(input);
		revalidatePath("/panel/incidencias");
		return { success: "ok" };
	});

export const eliminarIncidenciaAction = createServerAction()
	.input(z.number())
	.handler(async ({ input }) => {
		await eliminarIncidencia(input);
		revalidatePath("/panel/incidencias");
		return { success: "ok" };
	});
