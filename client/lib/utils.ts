import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { FieldErrors, FormType } from "./definitions";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function handleFieldErrors<T>(err: FieldErrors, form: FormType<T>) {
	Object.entries(err.fieldErrors).forEach(([field, error]) => {
		form.setError(field as T, {
			message: (error as string[])[0],
		});
	});
}

export function parseTime(timeStr: string) {
	const [hours, minutes] = timeStr.split(":").map(Number);
	const date = new Date();
	date.setHours(hours, minutes, 0, 0);
	return date;
}

export function formatDia(diaNumber: number) {
	switch (diaNumber) {
		case 0:
			return "Domingo";
		case 1:
			return "Lunes";
		case 2:
			return "Martes";
		case 3:
			return "Miercoles";
		case 4:
			return "Jueves";
		case 5:
			return "Viernes";
		case 6:
			return "Sabado";
		default:
			return "Error";
	}
}
