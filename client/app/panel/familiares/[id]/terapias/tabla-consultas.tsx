import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ConsultaT, TipoIncidenciaT } from "@/lib/definitions";
import { HeartHandshake } from "lucide-react";
import CrearConsulta from "./crear-dialog";
import { formatDia } from "@/lib/utils";
import ActualizarConsultaDialog from "./actualizar-dialog";
import { EliminarConsultaDialog } from "./eliminar-dialog";

export function TablaConsultas({
	id,
	consultas,
	tipoEspecialidades,
}: {
	id: number;
	consultas: ConsultaT[];
	tipoEspecialidades: TipoIncidenciaT[];
}) {
	return (
		<Card className="max-w-full mx-auto overflow-hidden">
			<CardHeader className="bg-blueCl text-white overflow-hidden relative">
				<CardTitle className="text-center capitalize flex items-center justify-center gap-4 text-xl">
					<HeartHandshake className="text-white" />{" "}
					<span>Lista de Consultas</span>
				</CardTitle>

				<CrearConsulta especialistas={tipoEspecialidades} id={id} />
			</CardHeader>
			<Table>
				<TableCaption>
					{consultas.length
						? "Lista de Consultas"
						: "No hay consultas para mostrar."}
				</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Especialidad</TableHead>
						<TableHead>Nombre Especialista</TableHead>
						<TableHead className="text-center">Dia</TableHead>
						<TableHead className="text-center">Hora Inicio</TableHead>
						<TableHead className="text-center">Hora Fin</TableHead>
						<TableHead className="text-center">Acciones</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{consultas.map((consulta) => (
						<TableRow key={consulta.id}>
							<TableCell>
								{
									tipoEspecialidades.find(
										(tipo) => tipo.id === consulta.idTipoEspecialidad
									)?.nombre
								}
							</TableCell>
							<TableCell>{consulta.nombreEspecialista}</TableCell>
							<TableCell className="text-center">
								{formatDia(consulta.dia)}
							</TableCell>
							<TableCell className="text-center">
								{consulta.horarioInicio}
							</TableCell>
							<TableCell className="flex justify-center">
								{consulta.horarioFin}
							</TableCell>
							<TableCell>
								<div className="flex justify-center items-center   gap-4 ">
									<ActualizarConsultaDialog
										consulta={consulta}
										especialistas={tipoEspecialidades}
									/>
									<EliminarConsultaDialog idConsulta={consulta.id} />
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
