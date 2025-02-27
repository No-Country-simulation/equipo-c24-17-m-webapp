import React from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { EllipsisVerticalIcon, UserPenIcon } from "lucide-react";
import { EliminarDialog } from "./eliminar-dialog";

export default function PopParienteOpciones() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="ghost">
					<EllipsisVerticalIcon />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-50">
				<div className="flex flex-col gap-4">
					<Button variant="outline">
						<UserPenIcon /> <p>Actualizar</p>
					</Button>
					<EliminarDialog />
				</div>
			</PopoverContent>
		</Popover>
	);
}
