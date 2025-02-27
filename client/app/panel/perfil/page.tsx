import React from "react";
import { TablaEstudios } from "./tabla-estudios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function page() {
	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle className="text-center">
						Historial Estudios Medicos
					</CardTitle>
				</CardHeader>

				<CardContent>
					<TablaEstudios />
				</CardContent>
			</Card>
		</div>
	);
}
