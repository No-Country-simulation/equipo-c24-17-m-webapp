"use client";
import React, { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerAction } from "zsa-react";
import { incidenciaSchemaNoID } from "@/lib/schemas";

import { incidenciaDefaultValues } from "@/lib/defaultValues";
import { toast } from "sonner";
import Loader from "@/components/Loader";
import { Textarea } from "@/components/ui/textarea";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import Calendar from "react-calendar";
import { cn, handleFieldErrors } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, Plus } from "lucide-react";
import { TipoIncidenciaT } from "@/lib/definitions";
import { HoverCardInfo } from "./hovercard-info";
import { crearIncidenciaAction } from "./actions";

export default function CrearIncidencia({
	id,
	tipoIncidencia,
}: {
	id: number;
	tipoIncidencia: TipoIncidenciaT[];
}) {
	const { isPending, execute } = useServerAction(crearIncidenciaAction);
	const [open, setOpen] = useState(false);

	const form = useForm<z.infer<typeof incidenciaSchemaNoID>>({
		resolver: zodResolver(incidenciaSchemaNoID),
		defaultValues: { ...incidenciaDefaultValues, idHijo: id },
	});

	const onSubmit = form.handleSubmit(
		async (values: z.infer<typeof incidenciaSchemaNoID>) => {
			const [data, err] = await execute(values);

			if (err) {
				if (err.fieldErrors) {
					handleFieldErrors(err, form);
				} else {
					toast.error(err.message);
				}
			}
			if (data) {
				toast.success("Inicidencia cargada con exito.");
				setOpen(false);
			}
		}
	);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger
				asChild
				className="mt-0
			"
			>
				<Button
					variant="ghost"
					className="p-2 bg-white rounded-full absolute right-4 top-4 "
				>
					<Plus size={17} className="text-black" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[540px]">
				<DialogHeader className="space-y-3">
					<DialogTitle>Actualizar Pariente</DialogTitle>
					<DialogDescription>Complete todos los campos.</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<Loader loading={isPending} />
					<form
						onSubmit={onSubmit}
						className="space-y-4 p-6 border rounded-lg shadow-md mt-10 w-[310px]  bg-white"
					>
						{/* <FormField
							control={form.control}
							name="idHijo"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Familiar</FormLabel>
									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Seleccionar un Familiar" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{parientes.map(({ id, nombre, apellido }) => (
												<SelectItem key={id} value={id.toString()}>
													{nombre} {apellido}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/> */}

						<FormField
							control={form.control}
							name="idTipoIncidencia"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Incidencia <HoverCardInfo />
									</FormLabel>
									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Seleccionar tipo de Incidencia" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{tipoIncidencia.map((tipo) => (
												<SelectItem key={tipo.id} value={tipo.id.toString()}>
													{tipo.nombre}
												</SelectItem>
											))}
										</SelectContent>
									</Select>

									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="fecha"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Fecha</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"w-[240px] pl-3 text-left font-normal",
														!field.value && "text-muted-foreground"
													)}
												>
													{field.value ? (
														format(field.value, "PPP", { locale: es })
													) : (
														<span>Seleccione una fecha</span>
													)}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												onChange={field.onChange}
												value={field.value}
												locale="es-AR"
												className={"rounded-lg border-slate-400"}
											/>
										</PopoverContent>
									</Popover>

									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="duracion"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Duración</FormLabel>
									<FormControl>
										<Input
											type="text"
											placeholder="2"
											{...field}
											onKeyDown={(e) =>
												!/[0-9]|Backspace|ArrowLeft|ArrowRight/.exec(e.key)
													? e.preventDefault()
													: e.key
											}
											onFocus={(e) =>
												e.target.value === "0"
													? (e.target.value = "")
													: e.target.value
											}
											disabled={isPending}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="descripcion"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Descripción</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Descripción de la incidencia"
											className="resize-none"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										*Describir al menos 2 características de la incidencia.
									</FormDescription>
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
			</DialogContent>
		</Dialog>
	);
}
