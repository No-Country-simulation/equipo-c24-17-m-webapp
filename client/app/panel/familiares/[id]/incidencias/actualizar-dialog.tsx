"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerAction } from "zsa-react";
import { incidenciaSchema } from "@/lib/schemas";
import { toast } from "sonner";
import Loader from "@/components/Loader";
import { Textarea } from "@/components/ui/textarea";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn, handleFieldErrors } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, FilePenLine, Frown, Smile } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Calendar from "react-calendar";
import { HoverCardInfo } from "./hovercard-info";
import { actualizarIncidenciaAction } from "./actions";
import { IncidenciaT, TipoIncidenciaT } from "@/lib/definitions";

export default function ActualizarIncidenciaDialog({
	incidencia,
	tipoIncidencia,
}: {
	incidencia: IncidenciaT;
	tipoIncidencia: TipoIncidenciaT[];
}) {
	const { isPending, execute } = useServerAction(actualizarIncidenciaAction);
	const [open, setOpen] = useState(false);

	const form = useForm<IncidenciaT>({
		resolver: zodResolver(incidenciaSchema),
		defaultValues: incidencia,
	});

	const onSubmit = form.handleSubmit(async (values: IncidenciaT) => {
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
			form.reset();
		}
	});

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="ghost" className="p-0">
					<FilePenLine size={17} className="text-black" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[440px]">
				<DialogHeader className="space-y-3">
					<div className="flex justify-start items-center gap-4">
						<div className=" gap-0 rounded-full h-16 w-16 bg-rosaCl text-white hover:bg-rosaCl hover:opacity-80 flex items-center justify-center">
							<FilePenLine className="w-7 h-7 text-white" />{" "}
						</div>
						<DialogTitle className="text-xl uppercase font-normal">
							Actualizar Incidencia
						</DialogTitle>
					</div>
				</DialogHeader>
				<Form {...form}>
					<Loader loading={isPending} />
					<form onSubmit={onSubmit} className="space-y-4 p-6 bg-white">
						<FormField
							control={form.control}
							name="idTipoIncidencia"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex items-center gap-1">
										<span>Incidencia</span> <HoverCardInfo />
									</FormLabel>
									<Select
										onValueChange={field.onChange}
										value={field.value.toString()}
									>
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
												!/[0-9]|Backspace|ArrowLeft|ArrowRight|Tab/.exec(e.key)
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

						<FormField
							control={form.control}
							name="es_positiva"
							render={({ field }) => (
								<FormItem className="space-y-3">
									<FormControl>
										<RadioGroup
											onValueChange={(e) => {
												form.setValue("es_positiva", e === "true");
											}}
											defaultValue={field.value.toString()}
											className="flex space-y-1"
										>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="false" />
												</FormControl>
												<FormLabel className="font-normal flex items-center gap-1">
													<Frown />
													Incidencia negativa
												</FormLabel>
											</FormItem>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="true" />
												</FormControl>

												<FormLabel className="font-normal flex items-center gap-1">
													<Smile />
													Incidencia Positiva
												</FormLabel>
											</FormItem>
										</RadioGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
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
