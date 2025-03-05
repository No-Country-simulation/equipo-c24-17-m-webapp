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
import { IncidenciaT, TipoIncidenciaT } from "@/lib/definitions";
import { HeartHandshake } from "lucide-react";

export function TablaTerapias({
	id,
	terapias,
	tipoEspecialidad,
}: {
	id: number;
	terapias: IncidenciaT[];
	tipoEspecialidad: TipoIncidenciaT[];
}) {
	return (
		<Card className="max-w-full mx-auto overflow-hidden">
			<CardHeader className="bg-blueCl text-white overflow-hidden relative">
				<CardTitle className="text-center capitalize flex items-center justify-center gap-4 text-xl">
					<HeartHandshake className="text-white" />{" "}
					<span>Lista de Terapias</span>
				</CardTitle>

				{/* <CrearIncidencia tipoIncidencia={tipoIncidencia} id={id} /> */}
			</CardHeader>
			<Table>
				<TableCaption>
					{terapias.length
						? "Lista de Terapias"
						: "No hay terapias para mostrar."}
				</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Especialidad</TableHead>
						<TableHead>Fecha Inicio</TableHead>
						<TableHead className="text-center">Fecha Fin</TableHead>
						<TableHead className="text-center">Dia</TableHead>
						<TableHead className="text-center">Horario</TableHead>
						<TableHead className="text-center">Acciones</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{/* {terapias.map((terapia) => (
						<TableRow key={incidencia.id}>
							<TableCell>
								{
									tipoIncidencia.find(
										(tipo) => tipo.id === incidencia.idTipoIncidencia
									)?.nombre
								}
							</TableCell>
							<TableCell>{format(incidencia.fecha, "dd/MM/yyyy")}</TableCell>
							<TableCell className="text-center">
								{incidencia.duracion}hs.
							</TableCell>
							<TableCell className="text-center">
								{incidencia.descripcion}
							</TableCell>
							<TableCell className="flex justify-center">
								{incidencia.es_positiva ? <Smile /> : <Frown />}
							</TableCell>
							<TableCell>
								<div className="flex justify-center items-center   gap-4 ">
									<ActualizarIncidenciaDialog
										incidencia={incidencia}
										tipoIncidencia={tipoIncidencia}
									/>
									<EliminarIncidenciaDialog idIncidecia={incidencia.id} />
								</div>
							</TableCell>
						</TableRow>
					))} */}
				</TableBody>
			</Table>
		</Card>
	);
}
