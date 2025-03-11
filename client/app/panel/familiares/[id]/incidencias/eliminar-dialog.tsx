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

import { LoaderCircleIcon, TrashIcon, FilePenLine } from "lucide-react";
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
				<Button variant="ghost" className="p-0">
					<TrashIcon size={17} className="text-rose-500" />
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-[90%] sm:max-w-[340px] rounded-lg">
				<DialogHeader className="space-y-3">
					<div className="flex justify-start items-center gap-4">
						<div className=" gap-0 rounded-full h-16 w-16 bg-rosaCl text-white hover:bg-rosaCl hover:opacity-80 flex items-center justify-center">
							<FilePenLine className="w-7 h-7 text-white" />{" "}
						</div>
						<DialogTitle className="text-xl uppercase font-normal">
							Eliminar Incidencia
						</DialogTitle>
					</div>
					<DialogDescription className="text-center">
						Esta seguro que desea eliminar la incidencia ?
					</DialogDescription>
				</DialogHeader>
				<div className="flex items-center justify-center gap-8 mt-4">
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
