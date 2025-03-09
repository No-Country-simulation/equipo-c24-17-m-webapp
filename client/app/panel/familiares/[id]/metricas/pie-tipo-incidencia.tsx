"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { ReporteTipoIncidenciaT } from "@/lib/definitions";

const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	positiva: {
		label: "Positiva",
	},
	negativa: {
		label: "Negativa",
	},
	sensibilidad: {
		label: "Sensibilidad",
		color: "hsl(var(--chart-1))",
	},
	comunicacion: {
		label: "Comunicación",
		color: "hsl(var(--chart-2))",
	},
	interaccion: {
		label: "Interacción",
		color: "hsl(var(--chart-3))",
	},
	conductas: {
		label: "Conductas repetitivas",
		color: "hsl(var(--chart-4))",
	},
	habilidades: {
		label: "Habilidades cognitivas",
		color: "hsl(var(--chart-5))",
	},
} satisfies ChartConfig;

export function PieTipoIncidencia({
	reporteTipoIncidencia,
}: {
	reporteTipoIncidencia: ReporteTipoIncidenciaT;
}) {
	const { negativas, positivas } = reporteTipoIncidencia;
	return (
		<Card className="flex flex-col max-w-[400px]">
			<CardHeader className="items-center pb-0">
				<CardTitle>Tipo de Incidenias</CardTitle>
				<CardDescription>Registro ultimo año</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square max-h-[250px]"
				>
					<PieChart>
						<ChartTooltip
							content={
								<ChartTooltipContent
									labelKey="visitors"
									nameKey="tag"
									indicator="line"
									labelFormatter={(_, payload) => {
										return chartConfig[
											payload?.[0].dataKey as keyof typeof chartConfig
										].label;
									}}
								/>
							}
						/>
						<Pie data={negativas} dataKey="negativa" outerRadius={60} />
						<Pie
							data={positivas}
							dataKey="positiva"
							innerRadius={70}
							outerRadius={90}
						/>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm">
				<div className="flex items-center gap-2 font-medium leading-none">
					Estadisticas positivas y negativas
				</div>
				<div className="leading-none text-muted-foreground">
					Compartiva por tipo de incidencia
				</div>
			</CardFooter>
		</Card>
	);
}
