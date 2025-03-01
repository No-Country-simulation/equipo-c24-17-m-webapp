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
