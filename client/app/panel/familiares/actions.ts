"use server";

import {
	actualizarPariente,
	createPariente,
	eliminarPariente,
} from "@/lib/database";
import { parienteSchema, parienteSchemaNoID } from "@/lib/schemas";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createServerAction } from "zsa";

export const crearParienteAction = createServerAction()
	.input(parienteSchemaNoID)
	.handler(async ({ input }) => {
		console.log({ input });
		await createPariente(input);
		revalidatePath("/panel");
		return { success: "ok" };
	});

export const eliminarParienteAction = createServerAction()
	.input(z.object({ id: z.number() }))
	.handler(async ({ input }) => {
		await eliminarPariente(input.id);
		revalidatePath("/panel");
		return { success: "ok" };
	});

export const actualizarParienteAction = createServerAction()
	.input(parienteSchema)
	.handler(async ({ input }) => {
		await actualizarPariente(input);
		revalidatePath("/panel");
		return { success: "ok" };
	});
