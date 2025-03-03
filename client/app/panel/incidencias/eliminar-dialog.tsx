"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { LoaderCircleIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import { useServerAction } from "zsa-react";
import { toast } from "sonner";
import { eliminarIncidenciaAction } from "./actions";

export function EliminarIncidenciaDialog({
	idIncidecia,
}: {
	idIncidecia: number;
}) {
	const { isPending, execute } = useServerAction(eliminarIncidenciaAction);
	const [open, setOpen] = useState(false);

	const handleClick = async () => {
		const [data, err] = await execute(idIncidecia);

		if (err) {
			toast.error(err.message);
		}

		if (data) {
			toast.success("Incidencia eliminada con exito.");
		}
		setOpen(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="destructive">
					<TrashIcon /> <p>Eliminar</p>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[340px]">
				<DialogHeader className="space-y-3">
					<DialogTitle>Eliminar Incidencia</DialogTitle>
					<DialogDescription>
						Esta seguro que desea eliminar la incidencia ?
					</DialogDescription>
				</DialogHeader>
				<div className="flex items-center justify-start gap-8 mt-4">
					<Button
						variant="secondary"
						onClick={() => setOpen(false)}
						disabled={isPending}
					>
						Cancelar
					</Button>
					<Button
						variant="destructive"
						onClick={handleClick}
						disabled={isPending}
						className="min-w-[100px]"
					>
						{isPending ? (
							<LoaderCircleIcon className="animate-spin" />
						) : (
							"Eliminar"
						)}
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
