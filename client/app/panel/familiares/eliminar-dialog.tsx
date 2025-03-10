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

import { LoaderCircleIcon, TrashIcon, UserPen } from "lucide-react";
import { useState } from "react";
import { eliminarParienteAction } from "./actions";
import { useServerAction } from "zsa-react";
import { toast } from "sonner";

export function EliminarDialog({ idPariente }: { idPariente: number }) {
	const { isPending, execute } = useServerAction(eliminarParienteAction);
	const [open, setOpen] = useState(false);

	const handleClick = async () => {
		const [data, err] = await execute({ id: idPariente });

		if (err) {
			toast.error(err.message);
		}

		if (data) {
			toast.success("Hijo eliminado con exito.");
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
			<DialogContent className=" max-w-[340px]  rounded-lg ">
				<DialogHeader className="space-y-3">
					<div className="flex items-center justify-center gap-3">
						<div className=" gap-0 flex justify-center items-center  rounded-full h-12 w-12 bg-verdeCl text-white  ">
							<UserPen className="w-7 h-7 text-white" />{" "}
						</div>
						<DialogTitle className="text-xl uppercase font-normal">
							Eliminar Familiar
						</DialogTitle>
					</div>
					<DialogDescription className="text-center">
						Esta seguro que desea eliminar el familiar ?
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
