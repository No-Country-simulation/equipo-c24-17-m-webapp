import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { AppWindow } from "lucide-react";
import { BarChartEstado } from "./bar-chart-estado";
import { ReporteEstadoT, ReporteTipoIncidenciaT } from "@/lib/definitions";
import { PieTipoIncidencia } from "./pie-tipo-incidencia";

export function TablaMetricas({
	reporteEstado,
	reporteTipoIncidencia,
}: {
	reporteEstado: ReporteEstadoT[];
	reporteTipoIncidencia: ReporteTipoIncidenciaT;
}) {
	return (
		<Card className="max-w-full mx-auto overflow-hidden">
			<CardHeader className="bg-verdeCl text-white overflow-hidden relative">
				<CardTitle className="text-center capitalize flex items-center justify-center gap-4 text-xl">
					<AppWindow className="text-white" /> <span>Métricas</span>
				</CardTitle>
			</CardHeader>
			<CardContent className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
				<PieTipoIncidencia reporteTipoIncidencia={reporteTipoIncidencia} />
				<BarChartEstado reporte={reporteEstado} />
			</CardContent>
		</Card>
	);
}
