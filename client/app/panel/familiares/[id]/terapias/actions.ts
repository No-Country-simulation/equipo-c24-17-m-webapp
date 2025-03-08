"use server";

import { crearConsulta } from "@/lib/database";
import { consultaSchema, consultaSchemNoID } from "@/lib/schemas";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createServerAction } from "zsa";

export const crearConsultaAction = createServerAction()
	.input(consultaSchemNoID)
	.handler(async ({ input }) => {
		await crearConsulta(input);
		revalidatePath("/panel/familiares");
		return { success: "ok" };
	});

export const actualizarConsultaAction = createServerAction()
	.input(consultaSchema)
	.handler(async ({ input }) => {
		console.log(input);
		// await actualizarIncidencia(input);
		revalidatePath("/panel/familiares");
		return { success: "ok" };
	});

export const eliminarConsultaAction = createServerAction()
	.input(z.number())
	.handler(async ({ input }) => {
		console.log(input);
		// await eliminarIncidencia(input);
		revalidatePath("/panel/familiares");
		return { success: "ok" };
	});
