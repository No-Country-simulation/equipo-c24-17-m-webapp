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
import PopIncidenciaOpciones from "./pop-incidencia-opciones";

export function TablaIncidencias({
	incidencias,
	tipoIncidencia,
	nombre,
}: {
	incidencias: IncidenciaT[];
	tipoIncidencia: TipoIncidenciaT[];
	nombre: string;
}) {
	return (
		<Card className="max-w-[800px] mx-auto">
			<CardHeader>
				<CardTitle className="text-center capitalize">{nombre}</CardTitle>
			</CardHeader>
			<Table>
				<TableCaption>
					{incidencias.length
						? "Lista de incidencias"
						: "No hay incidencias para mostrar."}
				</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Incidencia</TableHead>
						<TableHead>Fecha</TableHead>
						<TableHead>Duración</TableHead>
						<TableHead>Descripción</TableHead>
						<TableHead>Acciones</TableHead>
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
							<TableCell>{incidencia.duracion}hs.</TableCell>
							<TableCell>{incidencia.descripcion}</TableCell>
							<TableCell>
								<PopIncidenciaOpciones
									incidencia={incidencia}
									tipoIncidencia={tipoIncidencia}
								/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
