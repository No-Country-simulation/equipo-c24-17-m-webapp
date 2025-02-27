"use client";
import { KeyofPariente, ParienteT } from "@/lib/definitions";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerAction } from "zsa-react";
import { parienteSchema } from "@/lib/schemas";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { actualizarParienteAction } from "./actions";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Form,
} from "@/components/ui/form";
import { UserPenIcon } from "lucide-react";

export default function ActualizarDialog({
	pariente,
}: {
	pariente: ParienteT;
}) {
	const { isPending, execute } = useServerAction(actualizarParienteAction);
	const [open, setOpen] = useState(false);
	const form = useForm<z.infer<typeof parienteSchema>>({
		resolver: zodResolver(parienteSchema),
		defaultValues: pariente,
	});

	const onSubmit = form.handleSubmit(
		async (values: z.infer<typeof parienteSchema>) => {
			const fechaISO = new Date(values.fechaNacimiento)
				.toISOString()
				.split("T")[0];

			const newData = { ...values, fecha: fechaISO };

			const [data, err] = await execute(newData);

			if (err) {
				if (err.fieldErrors) {
					Object.entries(err.fieldErrors).map(([field, error]) => {
						form.setError(field as KeyofPariente, {
							message: (error as string[])[0],
						});
					});
				} else {
					toast.error(err.message);
				}
			}
			if (data) {
				toast.success("Hijo actualizado con exito.");
			}
		}
	);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline">
					<UserPenIcon /> <p>Actualizar</p>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[540px]">
				<DialogHeader className="space-y-3">
					<DialogTitle>Actualizar Pariente</DialogTitle>
					<DialogDescription>Complete todos los campos.</DialogDescription>
				</DialogHeader>
				<div className="flex items-center justify-start gap-8 mt-4">
					<Form {...form}>
						<form
							onSubmit={onSubmit}
							className="space-y-4 p-6 border rounded-lg shadow-md mt-10  w-full  bg-white"
						>
							<div className="grid grid-cols-2 gap-4">
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
							</div>

							<div className="flex justify-center">
								<Button type="submit" disabled={isPending}>
									Agregar
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</DialogContent>
		</Dialog>
	);
}
