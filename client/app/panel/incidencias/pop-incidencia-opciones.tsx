import React from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { EllipsisVerticalIcon } from "lucide-react";
import { IncidenciaT, TipoIncidenciaT } from "@/lib/definitions";
import ActualizarIncidenciaDialog from "./actualizar-dialog";
import { EliminarIncidenciaDialog } from "./eliminar-dialog";

export default function PopIncidenciaOpciones({
	incidencia,
	tipoIncidencia,
}: {
	incidencia: IncidenciaT;
	tipoIncidencia: TipoIncidenciaT[];
}) {
	const { id } = incidencia;
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="link">
					<EllipsisVerticalIcon />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-50">
				<div className="flex flex-col gap-4">
					<ActualizarIncidenciaDialog
						incidencia={incidencia}
						tipoIncidencia={tipoIncidencia}
					/>
					<EliminarIncidenciaDialog idIncidecia={id} />
				</div>
			</PopoverContent>
		</Popover>
	);
}
