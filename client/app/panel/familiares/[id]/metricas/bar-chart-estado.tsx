"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
import { ReporteEstadoT } from "@/lib/definitions";

const chartConfig = {
	positiva: {
		label: "Positiva",
		color: "#5FBDAC",
	},
	negativa: {
		label: "Negativa",
		color: "#E8386C",
	},
} satisfies ChartConfig;

export function BarChartEstado({ reporte }: { reporte: ReporteEstadoT[] }) {
	return (
		<Card className="max-w-[400px]">
			<CardHeader className="text-center">
				<CardTitle>Registro de incidencias </CardTitle>
				<CardDescription>Ultimos 6 meses</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={reporte}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="mes"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="dashed" />}
						/>
						<Bar dataKey="positiva" fill="var(--color-positiva)" radius={4} />
						<Bar dataKey="negativa" fill="var(--color-negativa)" radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-center gap-2 text-sm">
				<div className="flex gap-2 font-medium leading-none">
					Se ve una mejora de 7% <TrendingUp className="h-4 w-4" />
				</div>
				<div className="leading-none text-muted-foreground">
					Segun los datos cargados los ultimos 6 meses
				</div>
			</CardFooter>
		</Card>
	);
}
