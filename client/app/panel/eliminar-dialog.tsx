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

import { TrashIcon } from "lucide-react";
import { useState } from "react";

export function EliminarDialog() {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="destructive">
					<TrashIcon /> <p>Eliminar</p>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[340px]">
				<DialogHeader className="space-y-3">
					<DialogTitle>Eliminar Pariente</DialogTitle>
					<DialogDescription>
						Esta seguro que desea eliminar el pariente ?
					</DialogDescription>
				</DialogHeader>
				<div className="flex items-center justify-start gap-8 mt-4">
					<Button variant="secondary" onClick={() => setOpen(false)}>
						Cancelar
					</Button>
					<Button variant="destructive">Eliminar</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
