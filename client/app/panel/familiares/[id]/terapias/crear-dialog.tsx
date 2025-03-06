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
import { consultaSchemNoID } from "@/lib/schemas";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { consultaDefaultValues } from "@/lib/defaultValues";
import { toast } from "sonner";
import Loader from "@/components/Loader";
import { Textarea } from "@/components/ui/textarea";
import TimePicker from "react-time-picker";
import { CalendarIcon, FilePenLine, Frown, Plus, Smile } from "lucide-react";
import { TipoIncidenciaT } from "@/lib/definitions";

export default function CrearConsulta({
	id,
	especialistas,
}: {
	id: number;
	especialistas: TipoIncidenciaT[];
}) {
	// const { isPending, execute } = useServerAction(crearIncidenciaAction);
	const [open, setOpen] = useState(false);

	const form = useForm<z.infer<typeof consultaSchemNoID>>({
		resolver: zodResolver(consultaSchemNoID),
		defaultValues: { ...consultaDefaultValues, idHijo: id },
	});

	const onSubmit = form.handleSubmit(
		async (values: z.infer<typeof consultaSchemNoID>) => {
			// 	const [data, err] = await execute(values);
			// 	if (err) {
			// 		if (err.fieldErrors) {
			// 			handleFieldErrors(err, form);
			// 		} else {
			// 			toast.error(err.message);
			// 		}
			// 	}
			// 	if (data) {
			// 		toast.success("Inicidencia cargada con exito.");
			// 		form.reset();
			// 		setOpen(false);
			// 	}
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
			<DialogContent className="">
				<DialogHeader className="space-y-3">
					<div className="flex justify-start items-center gap-4">
						<div className=" gap-0 rounded-full h-16 w-16 bg-rosaCl text-white hover:bg-rosaCl hover:opacity-80 flex items-center justify-center">
							<FilePenLine className="w-7 h-7 text-white" />{" "}
						</div>
						<DialogTitle className="text-xl uppercase font-normal">
							Agregar Consulta
						</DialogTitle>
					</div>
				</DialogHeader>
				<Form {...form}>
					{/* <Loader loading={isPending} /> */}
					<form onSubmit={onSubmit} className="space-y-4 p-6  ">
						<FormField
							control={form.control}
							name="idTipoEspecialidad"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex items-center">
										<span>Tipo de Especialidad</span>
									</FormLabel>
									<Select onValueChange={field.onChange}>
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
										<Input placeholder="Jose Hernandez" {...field} />
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
											className="flex  justify-start  gap-4"
										>
											<FormItem className="flex flex-col justify-center items-center">
												<FormControl>
													<RadioGroupItem value="lunes" />
												</FormControl>
												<FormLabel className="font-normal flex items-center gap-1">
													LU
												</FormLabel>
											</FormItem>
											<FormItem className="flex flex-col justify-center items-center">
												<FormControl>
													<RadioGroupItem value="martes" />
												</FormControl>

												<FormLabel className="font-normal flex items-center gap-1">
													MA
												</FormLabel>
											</FormItem>
											<FormItem className="flex flex-col justify-center items-center">
												<FormControl>
													<RadioGroupItem value="miercoles" />
												</FormControl>
												<FormLabel className="font-normal flex items-center gap-1">
													MI
												</FormLabel>
											</FormItem>
											<FormItem className="flex flex-col justify-center items-center">
												<FormControl>
													<RadioGroupItem value="jueves" />
												</FormControl>

												<FormLabel className="font-normal flex items-center gap-1">
													JU
												</FormLabel>
											</FormItem>
											<FormItem className="flex flex-col justify-center items-center">
												<FormControl>
													<RadioGroupItem value="viernes" />
												</FormControl>
												<FormLabel className="font-normal flex items-center gap-1">
													VI
												</FormLabel>
											</FormItem>
											<FormItem className="flex flex-col justify-center items-center">
												<FormControl>
													<RadioGroupItem value="sabado" />
												</FormControl>

												<FormLabel className="font-normal flex items-center gap-1">
													SA
												</FormLabel>
											</FormItem>
											<FormItem className="flex flex-col justify-center items-center">
												<FormControl>
													<RadioGroupItem value="domingo" />
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

						<FormField
							control={form.control}
							name="horaDesde"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Hora desde</FormLabel>

									<FormControl>
										<TimePicker
											{...field}
											onChange={field.onChange}
											value={field.value}
											className={"input-time-picker"}
											disableClock={true}
											locale="es-AR"
											format="HH:mm"
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="horaHasta"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Hora</FormLabel>

									<FormControl>
										<TimePicker
											{...field}
											onChange={field.onChange}
											value={field.value}
											className={"input-time-picker"}
											disableClock={true}
											locale="es-AR"
											format="HH:mm"
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="flex justify-center pt-8">
							<Button
								type="submit"
								// disabled={isPending}
								className="bg-blueCl hover:bg-blueCl hover:text-white hover:opacity-90 rounded-full px-8 shadow-xl"
							>
								Agregar
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
