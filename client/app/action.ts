"use server";

export type Wheater = {
	date: Date;
	temperatureC: number;
	summary: string;
	temperatureF: number;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getWeather() {
	console.log("url:", API_URL);
	try {
		const res = await fetch(`${API_URL}weatherforecast`);
		const data = (await res.json()) as Wheater[];

		if (!res.ok) {
			throw new Error("Error buscando los datos");
		}

		return data;
	} catch (error) {
		console.log("Error en el fetch", error);
		throw new Error();
	}
}
