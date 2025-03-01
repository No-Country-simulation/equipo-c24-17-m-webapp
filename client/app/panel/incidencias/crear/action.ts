"use server";

import { crearIncidencia } from "@/lib/database";
import { incidenciaSchemaNoID } from "@/lib/schemas";

import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";

export const crearIncidenciaAction = createServerAction()
	.input(incidenciaSchemaNoID)
	.handler(async ({ input }) => {
		await crearIncidencia(input);
		revalidatePath("/panel");
		return { success: "ok" };
	});
