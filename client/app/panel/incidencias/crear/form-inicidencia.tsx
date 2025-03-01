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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerAction } from "zsa-react";
import { incidenciaSchemaNoID } from "@/lib/schemas";
import { crearIncidenciaAction } from "./action";
import { incidenciaDefaultValues } from "@/lib/defaultValues";
import { toast } from "sonner";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { HoverCardInfo } from "../hovercard-info";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { cn, handleFieldErrors } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { ParienteT, TipoIncidenciaT } from "@/lib/definitions";

export default function FormIncidencia({
	id,
	tipoIncidencia,
	parientes,
}: {
	id: number;
	tipoIncidencia: TipoIncidenciaT[];
	parientes: ParienteT[];
}) {
	const { isPending, execute } = useServerAction(crearIncidenciaAction);
	const router = useRouter();
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
				router.push("/panel/incidencias");
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
				/>

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
										mode="single"
										selected={field.value ? new Date(field.value) : undefined}
										onSelect={field.onChange}
										disabled={(date) =>
											date > new Date() || date < new Date("1900-01-01")
										}
										initialFocus
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
	);
}
