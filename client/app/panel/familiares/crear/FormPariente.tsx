"use client";

import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerAction } from "zsa-react";
import { parienteSchemaNoID } from "@/lib/schemas";
import { crearParienteAction } from "./action";
import { parienteDefaultValues } from "@/lib/defaultValues";
import { toast } from "sonner";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { handleFieldErrors } from "@/lib/utils";

export default function FormPariente({ email }: { email: string }) {
	const { isPending, execute } = useServerAction(crearParienteAction);
	const router = useRouter();
	const form = useForm<z.infer<typeof parienteSchemaNoID>>({
		resolver: zodResolver(parienteSchemaNoID),
		defaultValues: {
			...parienteDefaultValues,
			correoUsuario: email,
		},
	});

	const onSubmit = form.handleSubmit(
		async (values: z.infer<typeof parienteSchemaNoID>) => {
			const fechaISO = new Date(values.fechaNacimiento)
				.toISOString()
				.split("T")[0];

			const newData = { ...values, fecha: fechaISO };

			const [data, err] = await execute(newData);

			if (err) {
				if (err.fieldErrors) {
					handleFieldErrors(err, form);
				} else {
					toast.error(err.message);
				}
			}
			if (data) {
				toast.success("Hijo cargado con exito.");
				router.push("/panel/familiares");
			}
		}
	);

	return (
		<Form {...form}>
			<Loader loading={isPending} />
			<form
				onSubmit={onSubmit}
				className="space-y-4 p-6 border rounded-lg shadow-md mt-10 w-[310px]  bg-white"
			>
				<FormField
					control={form.control}
					name="nombre"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nombre</FormLabel>
							<FormControl>
								<Input
									type="text"
									placeholder="Nombre"
									{...field}
									disabled={isPending}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="apellido"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Apellido</FormLabel>
							<FormControl>
								<Input
									type="text"
									placeholder="Apellido"
									{...field}
									disabled={isPending}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="nombreDiagnostico"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Diagnóstico</FormLabel>
							<FormControl>
								<Input
									type="text"
									placeholder="Nombre del diagnóstico"
									{...field}
									disabled={isPending}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="descripcionDiagnostico"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Descripción</FormLabel>
							<FormControl>
								<Input
									type="text"
									placeholder="Descripción del diagnóstico"
									{...field}
									disabled={isPending}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="fechaNacimiento"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Fecha de Nacimiento</FormLabel>
							<FormControl>
								<Input type="date" {...field} disabled={isPending} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex justify-center">
					<Button type="submit" disabled={isPending}>
						Agregar
					</Button>
				</div>
			</form>
		</Form>
	);
}
