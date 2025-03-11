"use client";
import React, { useState } from "react";
import "react-time-picker/dist/TimePicker.css";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
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
import { consultaSchema } from "@/lib/schemas";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import Loader from "@/components/Loader";
import TimePicker from "react-time-picker";
import { FilePenLine, HeartHandshake } from "lucide-react";
import { ConsultaT, TipoIncidenciaT } from "@/lib/definitions";
import { actualizarConsultaAction } from "./actions";
import { handleFieldErrors } from "@/lib/utils";

export default function ActualizarConsultaDialog({
	consulta,
	especialistas,
}: {
	consulta: ConsultaT;
	especialistas: TipoIncidenciaT[];
}) {
	const { isPending, execute } = useServerAction(actualizarConsultaAction);
	const [open, setOpen] = useState(false);

	const form = useForm<z.infer<typeof consultaSchema>>({
		resolver: zodResolver(consultaSchema),
		defaultValues: consulta,
	});

	const onSubmit = form.handleSubmit(
		async (values: z.infer<typeof consultaSchema>) => {
			const [data, err] = await execute(values);
			if (err) {
				if (err.fieldErrors) {
					handleFieldErrors(err, form);
				} else {
					toast.error(err.message);
				}
			}
			if (data) {
				toast.success("Consulta actualizada con exito.");
				form.reset();
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
				<Button variant="ghost" className="p-0">
					<FilePenLine size={17} className="text-black" />
				</Button>
			</DialogTrigger>
			<DialogContent
				aria-describedby="formulario para agregar una consulta"
				className="max-w-[90%] sm:max-w-[440px] rounded-lg"
			>
				<DialogHeader className="space-y-3">
					<div className="flex justify-start items-center gap-4">
						<div className=" gap-0 rounded-full h-12 w-12  md:h-16 md:w-16 bg-blueCl text-white hover:bg-blueCl hover:opacity-80 flex items-center justify-center">
							<HeartHandshake className="w-7 h-7 text-white" />{" "}
						</div>
						<DialogTitle className="text-xl uppercase font-normal">
							Actualizar Consulta
						</DialogTitle>
					</div>
				</DialogHeader>
				<Form {...form}>
					<Loader loading={isPending} />
					<form onSubmit={onSubmit} className="space-y-4 sm:p-6  ">
						<FormField
							control={form.control}
							name="idTipoEspecialidad"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex items-center">
										<span>Tipo de Especialidad</span>
									</FormLabel>
									<Select
										onValueChange={field.onChange}
										value={field.value.toString()}
										disabled={true}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Seleccionar especialidad" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{especialistas.map((tipo) => (
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
							name="nombreEspecialista"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nombre Especialista</FormLabel>
									<FormControl>
										<Input
											placeholder="Jose Hernandez"
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
							name="dia"
							render={({ field }) => (
								<FormItem className="space-y-3">
									<FormLabel>Seleccione un dia</FormLabel>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											value={field.value.toString()}
											className="flex  justify-start  gap-4"
											disabled={isPending}
										>
											<FormItem className="flex flex-col justify-center items-center">
												<FormControl>
													<RadioGroupItem value="1" />
												</FormControl>
												<FormLabel className="font-normal flex items-center gap-1">
													LU
												</FormLabel>
											</FormItem>
											<FormItem className="flex flex-col justify-center items-center">
												<FormControl>
													<RadioGroupItem value="2" />
												</FormControl>

												<FormLabel className="font-normal flex items-center gap-1">
													MA
												</FormLabel>
											</FormItem>
											<FormItem className="flex flex-col justify-center items-center">
												<FormControl>
													<RadioGroupItem value="3" />
												</FormControl>
												<FormLabel className="font-normal flex items-center gap-1">
													MI
												</FormLabel>
											</FormItem>
											<FormItem className="flex flex-col justify-center items-center">
												<FormControl>
													<RadioGroupItem value="4" />
												</FormControl>

												<FormLabel className="font-normal flex items-center gap-1">
													JU
												</FormLabel>
											</FormItem>
											<FormItem className="flex flex-col justify-center items-center">
												<FormControl>
													<RadioGroupItem value="5" />
												</FormControl>
												<FormLabel className="font-normal flex items-center gap-1">
													VI
												</FormLabel>
											</FormItem>
											<FormItem className="flex flex-col justify-center items-center">
												<FormControl>
													<RadioGroupItem value="6" />
												</FormControl>

												<FormLabel className="font-normal flex items-center gap-1">
													SA
												</FormLabel>
											</FormItem>
											<FormItem className="flex flex-col justify-center items-center">
												<FormControl>
													<RadioGroupItem value="0" />
												</FormControl>
												<FormLabel className="font-normal flex items-center gap-1">
													DO
												</FormLabel>
											</FormItem>
										</RadioGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="flex items-center gap-8">
							<FormField
								control={form.control}
								name="horarioInicio"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel>Hora desde</FormLabel>

										<FormControl>
											<TimePicker
												{...field}
												onChange={field.onChange}
												value={field.value}
												className={"myclass"}
												disableClock={true}
												locale="es-AR"
												format="HH:mm"
												disabled={isPending}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="horarioFin"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel>Hora Hasta</FormLabel>

										<FormControl>
											<TimePicker
												{...field}
												onChange={field.onChange}
												value={field.value}
												className={"myclass"}
												disableClock={true}
												locale="es-AR"
												format="HH:mm"
												disabled={isPending}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className="flex justify-center pt-8">
							<Button
								type="submit"
								disabled={isPending}
								className="bg-blueCl hover:bg-blueCl hover:text-white hover:opacity-90 rounded-full px-8 shadow-xl"
							>
								Actualizar
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
