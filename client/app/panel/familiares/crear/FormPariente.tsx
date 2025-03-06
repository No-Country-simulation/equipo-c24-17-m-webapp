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
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Calendar from "react-calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
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
import { cn, handleFieldErrors } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";

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
			const [data, err] = await execute(values);

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
				className="grid grid-cols-2  gap-8 p-6 border rounded-lg shadow-md mt-10   bg-white"
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
												"w-full pl-3 text-left font-normal",
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

				<Card className="col-span-2">
					<CardHeader>
						<CardDescription>
							Fecha inicio y fin de terapia (opcional)
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-center gap-8">
							<FormField
								control={form.control}
								name="fechaInicioTerapia"
								render={({ field }) => (
									<FormItem className="flex flex-col pt-[10px] ">
										<FormLabel>Fecha de Inicio</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant={"outline"}
														className={cn(
															"w-full pl-3 text-left font-normal",
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
								name="fechaFinTerapia"
								render={({ field }) => (
									<FormItem className="flex flex-col pt-[10px] ">
										<FormLabel>Fecha de Nacimiento</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant={"outline"}
														className={cn(
															"w-full pl-3 text-left font-normal",
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
													maxDate={new Date()}
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
	);
}
