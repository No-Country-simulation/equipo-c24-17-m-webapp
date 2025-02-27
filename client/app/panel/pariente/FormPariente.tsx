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
import { parienteSchemaNoID } from "@/lib/schemas";
import { crearParienteAction } from "./action";
import { parienteDefaultValues } from "@/lib/defaultValues";
import { toast } from "sonner";

type KeyofPariente = keyof z.infer<typeof parienteSchemaNoID>;

export default function FormPariente({ email }: { email: string }) {
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

			const [data, err] = await crearParienteAction(newData);

			if (err) {
				if (err.fieldErrors) {
					Object.entries(err.fieldErrors).map(([field, error]) => {
						form.setError(field as KeyofPariente, {
							message: error[0],
						});
					});
				} else {
					toast.error(err.message);
				}
				console.log(err);
			}
			if (data) {
				console.log(data);
			}
		}
	);

	return (
		<Form {...form}>
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
								<Input type="text" placeholder="Nombre" {...field} />
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
								<Input type="text" placeholder="Apellido" {...field} />
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
								<Input type="date" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex justify-center">
					<Button type="submit">Agregar</Button>
				</div>
			</form>
		</Form>
	);
}
