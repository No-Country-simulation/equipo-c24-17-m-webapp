import React from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { EllipsisVerticalIcon } from "lucide-react";
import { EliminarDialog } from "./eliminar-dialog";
import { ParienteT } from "@/lib/definitions";
import ActualizarDialog from "./actualizar-dialog";

export default function PopParienteOpciones({
	pariente,
	correoUsuario,
}: {
	pariente: ParienteT;
	correoUsuario: string;
}) {
	const { id } = pariente;
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="link">
					<EllipsisVerticalIcon />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-50">
				<div className="flex flex-col gap-4">
					<ActualizarDialog pariente={pariente} correoUsuario={correoUsuario} />
					<EliminarDialog idPariente={id} />
				</div>
			</PopoverContent>
		</Popover>
	);
}
