import React from "react";
import { TablaConsultas } from "./tabla-consultas";

const tipoEspecialidades = [
	{ id: 1, nombre: "Especialidad 1 " },
	{ id: 2, nombre: "Especialidad 2 " },
	{ id: 3, nombre: "Especialidad 3 " },
	{ id: 4, nombre: "Especialidad 4 " },
	{ id: 5, nombre: "Especialidad 5 " },
];

const consultas = [
	{
		id: 1,
		idHijo: 101,
		dia: 1,
		horarioInicio: "08:00",
		horarioFin: "09:00",
		idTipoEspecialidad: 3,
		nombreEspecialista: "Dr. Juan Pérez",
	},
	{
		id: 2,
		idHijo: 102,
		dia: 2,
		horarioInicio: "09:30",
		horarioFin: "10:30",
		idTipoEspecialidad: 2,
		nombreEspecialista: "Dra. María López",
	},
	{
		id: 3,
		idHijo: 103,
		dia: 3,
		horarioInicio: "10:00",
		horarioFin: "11:00",
		idTipoEspecialidad: 1,
		nombreEspecialista: "Dr. Carlos González",
	},
	{
		id: 4,
		idHijo: 104,
		dia: 4,
		horarioInicio: "11:30",
		horarioFin: "12:30",
		idTipoEspecialidad: 4,
		nombreEspecialista: "Dra. Ana Martínez",
	},
	{
		id: 5,
		idHijo: 105,
		dia: 5,
		horarioInicio: "13:00",
		horarioFin: "14:00",
		idTipoEspecialidad: 5,
		nombreEspecialista: "Dr. Javier Fernández",
	},
	{
		id: 6,
		idHijo: 106,
		dia: 1,
		horarioInicio: "14:30",
		horarioFin: "15:30",
		idTipoEspecialidad: 3,
		nombreEspecialista: "Dr. Juan Pérez",
	},
	{
		id: 7,
		idHijo: 107,
		dia: 2,
		horarioInicio: "16:00",
		horarioFin: "17:00",
		idTipoEspecialidad: 2,
		nombreEspecialista: "Dra. María López",
	},
	{
		id: 8,
		idHijo: 108,
		dia: 3,
		horarioInicio: "17:30",
		horarioFin: "18:30",
		idTipoEspecialidad: 1,
		nombreEspecialista: "Dr. Carlos González",
	},
	{
		id: 9,
		idHijo: 109,
		dia: 4,
		horarioInicio: "19:00",
		horarioFin: "20:00",
		idTipoEspecialidad: 4,
		nombreEspecialista: "Dra. Ana Martínez",
	},
	{
		id: 10,
		idHijo: 110,
		dia: 5,
		horarioInicio: "20:30",
		horarioFin: "21:30",
		idTipoEspecialidad: 5,
		nombreEspecialista: "Dr. Javier Fernández",
	},
	{
		id: 11,
		idHijo: 111,
		dia: 1,
		horarioInicio: "08:30",
		horarioFin: "09:30",
		idTipoEspecialidad: 3,
		nombreEspecialista: "Dr. Juan Pérez",
	},
	{
		id: 12,
		idHijo: 112,
		dia: 2,
		horarioInicio: "09:00",
		horarioFin: "10:00",
		idTipoEspecialidad: 2,
		nombreEspecialista: "Dra. María López",
	},
	{
		id: 13,
		idHijo: 113,
		dia: 3,
		horarioInicio: "10:30",
		horarioFin: "11:30",
		idTipoEspecialidad: 1,
		nombreEspecialista: "Dr. Carlos González",
	},
	{
		id: 14,
		idHijo: 114,
		dia: 4,
		horarioInicio: "12:00",
		horarioFin: "13:00",
		idTipoEspecialidad: 4,
		nombreEspecialista: "Dra. Ana Martínez",
	},
	{
		id: 15,
		idHijo: 115,
		dia: 5,
		horarioInicio: "14:00",
		horarioFin: "15:00",
		idTipoEspecialidad: 5,
		nombreEspecialista: "Dr. Javier Fernández",
	},
];

export default async function page({
	params,
}: {
	params: Promise<{ id: number }>;
}) {
	const { id } = await params;
	// const tipoEspecialidad = await getTiposIncidencia();

	// const terapias = await getIncidenciasHijo(id);
	return (
		<div>
			<TablaConsultas
				consultas={consultas}
				tipoEspecialidades={tipoEspecialidades}
				id={id}
			/>
		</div>
	);
}
