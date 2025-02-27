"use server";

import { createPariente } from "@/lib/database";
import { parienteSchemaNoID } from "@/lib/schemas";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";

export const crearParienteAction = createServerAction()
	.input(parienteSchemaNoID)
	.handler(async ({ input }) => {
		await createPariente(input);
		revalidatePath("/panel");
		return { success: "ok" };
	});
