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
}: {
	pariente: ParienteT;
}) {
	const { id } = pariente;
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="ghost">
					<EllipsisVerticalIcon />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-50">
				<div className="flex flex-col gap-4">
					<ActualizarDialog pariente={pariente} />
					<EliminarDialog idPariente={id} />
				</div>
			</PopoverContent>
		</Popover>
	);
}
