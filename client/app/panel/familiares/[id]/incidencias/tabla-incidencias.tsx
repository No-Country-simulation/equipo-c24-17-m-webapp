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
import { format } from "date-fns";
import { Frown, Smile, UserPen } from "lucide-react";
import ActualizarIncidenciaDialog from "./actualizar-dialog";
import { EliminarIncidenciaDialog } from "./eliminar-dialog";
import CrearIncidencia from "./crear-dialog";
import { TextPopover } from "@/components/panel/text-popover";

export function TablaIncidencias({
	id,
	incidencias,
	tipoIncidencia,
}: {
	id: number;
	incidencias: IncidenciaT[];
	tipoIncidencia: TipoIncidenciaT[];
}) {
	return (
		<Card className="max-w-full mx-auto overflow-hidden">
			<CardHeader className="bg-rosaCl text-white overflow-hidden relative">
				<CardTitle className="text-center capitalize flex items-center justify-center gap-4 sm:text-xl">
					<UserPen className="text-white" /> <span>Control de Incidencias</span>
				</CardTitle>

				<CrearIncidencia tipoIncidencia={tipoIncidencia} id={id} />
			</CardHeader>
			<Table className="text-xs">
				<TableCaption>
					{incidencias.length
						? "Lista de incidencias"
						: "No hay incidencias para mostrar."}
				</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Incidencia</TableHead>
						<TableHead>Fecha</TableHead>
						<TableHead className="text-center">Duración</TableHead>
						<TableHead className="text-center">Descripción</TableHead>
						<TableHead className="text-center">Estado</TableHead>
						<TableHead className="text-center">Acciones</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{incidencias.map((incidencia) => (
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
								{incidencia.duracion}min.
							</TableCell>
							<TableCell className="text-center">
								<TextPopover text={incidencia.descripcion} />
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
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
