"use server";

import {
	actualizarIncidencia,
	crearIncidencia,
	eliminarIncidencia,
} from "@/lib/database";
import { incidenciaSchema, incidenciaSchemaNoID } from "@/lib/schemas";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createServerAction } from "zsa";

export const crearIncidenciaAction = createServerAction()
	.input(incidenciaSchemaNoID)
	.handler(async ({ input }) => {
		await crearIncidencia(input);
		revalidatePath("/panel/familiares");
		return { success: "ok" };
	});

export const actualizarIncidenciaAction = createServerAction()
	.input(incidenciaSchema)
	.handler(async ({ input }) => {
		await actualizarIncidencia(input);
		revalidatePath("/panel/familiares");
		return { success: "ok" };
	});

export const eliminarIncidenciaAction = createServerAction()
	.input(z.number())
	.handler(async ({ input }) => {
		await eliminarIncidencia(input);
		revalidatePath("/panel/familiares");
		return { success: "ok" };
	});
