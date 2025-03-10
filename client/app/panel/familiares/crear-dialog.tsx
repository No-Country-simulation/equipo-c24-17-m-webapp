"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerAction } from "zsa-react";
import { parienteSchemaNoID } from "@/lib/schemas";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { crearParienteAction } from "./actions";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Form,
} from "@/components/ui/form";
import { CalendarIcon, UserPen, UserPlus } from "lucide-react";
import { cn, handleFieldErrors } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Calendar from "react-calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { parienteDefaultValues } from "@/lib/defaultValues";

export default function CrearFamiliarDialog({
	correoUsuario,
}: {
	correoUsuario: string;
}) {
	const { isPending, execute } = useServerAction(crearParienteAction);
	const [open, setOpen] = useState(false);
	const form = useForm<z.infer<typeof parienteSchemaNoID>>({
		resolver: zodResolver(parienteSchemaNoID),
		defaultValues: {
			...parienteDefaultValues,
			correoUsuario: correoUsuario,
		},
	});

	const onSubmit = form.handleSubmit(
		async (values: z.infer<typeof parienteSchemaNoID>) => {
			const [data, err] = await execute(values);

			if (err) {
				if (err.fieldErrors) {
					handleFieldErrors(err, form);
				} else {
					toast.error(err.message);
				}
			}
			if (data) {
				toast.success("Hijo actualizado con exito.");
				setOpen(false);
				form.reset();
			}
		}
	);

	console.log(form.formState.errors);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Card className="pt-6 max-w-[380px] hover:cursor-pointer hover:shadow-lg hover:opacity-80">
					<CardContent className="flex  items-center gap-8">
						<div>
							<h2 className="text-xl font-semibold text-blueCl">
								Añadir Perfil Nuevo
							</h2>
							<p>Cargar un nuevo perfil de registro aquí.</p>
						</div>

						<div className=" gap-0 flex flex-col items-center justify-center  rounded-full h-20 w-20 min-w-20 min-h-20 bg-verdeCl text-white ">
							<UserPlus className="w-10 h-10 text-white" />{" "}
						</div>
					</CardContent>
				</Card>
			</DialogTrigger>
			<DialogContent className="max-w-[90%] sm:max-w-[440px] rounded-lg">
				<DialogHeader>
					<div className="flex items-center justify-center gap-3">
						<div className=" gap-0 flex justify-center items-center  rounded-full h-12 w-12 bg-verdeCl text-white ">
							<UserPen className="w-7 h-7 text-white" />{" "}
						</div>
						<DialogTitle className="text-xl uppercase font-normal">
							Agregar Familiar
						</DialogTitle>
					</div>
				</DialogHeader>
				<div className="flex items-center justify-start gap-8 ">
					<Form {...form}>
						<form
							onSubmit={onSubmit}
							className="grid grid-cols-2  gap-4 p-6   bg-white"
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
								name="fechaNacimiento"
								render={({ field }) => (
									<FormItem className="flex flex-col pt-[10px] ">
										<FormLabel>Fecha de Nacimiento</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant={"outline"}
														className={cn(
															"w-full pl-3 text-left font-normal border border-lightBlueCl focus-visible:border-blueCl focus-visible:border-2 ",
															!field.value && "text-muted-foreground"
														)}
													>
														{field.value ? (
															format(field.value, "dd/MM/yyyy", { locale: es })
														) : (
															<span>Seleccione</span>
														)}
														<CalendarIcon className="ml-auto h-4 w-4 opacity-70 text-blueCl" />
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent className="w-auto p-0" align="start">
												<Calendar
													onChange={field.onChange}
													value={field.value}
													locale="es-AR"
													className={"rounded-lg border-slate-400"}
													maxDate={new Date()}
												/>
											</PopoverContent>
										</Popover>

										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="descripcionDiagnostico"
								render={({ field }) => (
									<FormItem className="col-span-2">
										<FormLabel>Descripción del diagnostico</FormLabel>
										<FormControl>
											<Textarea
												className="resize-none"
												placeholder="Descripción del diagnóstico"
												{...field}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Card className="col-span-2 border border-lightBlueCl">
								<CardHeader>
									<CardDescription>
										Fecha inicio y fin de terapia (opcional)
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex items-center gap-4">
										<FormField
											control={form.control}
											name="fechaInicio"
											render={({ field }) => (
												<FormItem className="flex flex-col pt-[10px] w-1/2 ">
													<FormLabel>Fecha de Inicio</FormLabel>
													<Popover>
														<PopoverTrigger asChild>
															<FormControl>
																<Button
																	variant={"outline"}
																	className={cn(
																		"w-full pl-3 text-left font-normal border border-lightBlueCl",
																		!field.value && "text-muted-foreground"
																	)}
																>
																	{field.value ? (
																		format(field.value, "dd/MM/yyyy", {
																			locale: es,
																		})
																	) : (
																		<span>Seleccione</span>
																	)}
																	<CalendarIcon className="ml-auto h-4 w-4 opacity-70 text-blueCl" />
																</Button>
															</FormControl>
														</PopoverTrigger>
														<PopoverContent
															className="w-auto p-0"
															align="start"
														>
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
											name="fechaCulminacion"
											render={({ field }) => (
												<FormItem className="flex flex-col pt-[10px] w-1/2 ">
													<FormLabel>Fecha de Fin</FormLabel>
													<Popover>
														<PopoverTrigger asChild>
															<FormControl>
																<Button
																	variant={"outline"}
																	className={cn(
																		"w-full pl-3 text-left font-normal border border-lightBlueCl",
																		!field.value && "text-muted-foreground"
																	)}
																>
																	{field.value ? (
																		format(field.value, "dd/MM/yyyy", {
																			locale: es,
																		})
																	) : (
																		<span>Seleccione</span>
																	)}
																	<CalendarIcon className="ml-auto h-4 w-4 opacity-70 text-blueCl" />
																</Button>
															</FormControl>
														</PopoverTrigger>
														<PopoverContent
															className="w-auto p-0"
															align="start"
														>
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
									</div>
								</CardContent>
							</Card>

							<div className="flex justify-center col-span-2">
								<Button
									type="submit"
									disabled={isPending}
									className="bg-blueCl hover:bg-blueCl hover:text-white hover:opacity-90 rounded-full px-8 shadow-xl"
								>
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
