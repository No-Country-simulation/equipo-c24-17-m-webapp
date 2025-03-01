import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TablaIncidencias } from "../incidencias/tabla-incidencias";

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
					<TablaIncidencias />
				</CardContent>
			</Card>
		</div>
	);
}
