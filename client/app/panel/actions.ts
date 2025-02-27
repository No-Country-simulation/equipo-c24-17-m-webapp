"use server";

import { eliminarPariente } from "@/lib/database";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createServerAction } from "zsa";

export const eliminarParienteAction = createServerAction()
	.input(z.object({ id: z.number() }))
	.handler(async ({ input }) => {
		await eliminarPariente(input.id);
		revalidatePath("/panel");
		return { success: "ok" };
	});

export const actualizarParienteAction = createServerAction()
	.input(z.object({ id: z.number() }))
	.handler(async ({ input }) => {
		await eliminarPariente(input.id);
		revalidatePath("/panel");
		return { success: "ok" };
	});
