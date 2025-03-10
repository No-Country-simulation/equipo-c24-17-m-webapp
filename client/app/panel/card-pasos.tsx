import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import React from "react";

type CardContentT = {
	titulo: string;
	parrafo: string;
	color: string;
	icono: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
};
export default function CardPasos({
	cardContent,
	number,
}: {
	cardContent: CardContentT;
	number: number;
}) {
	const { color, icono, parrafo, titulo } = cardContent;
	const LinkIcon = icono;
	return (
		<Card className="text-center relative md:flex items-center">
			<p
				className={cn(
					`text-6xl text-${color} font-bold absolute -top-7 left-1/2 transform -translate-x-1/2 md:-left-0 md:top-1/2 md:-translate-y-1/2`
				)}
				style={{ color: color }}
			>
				{number}
			</p>
			<CardHeader className="">
				<CardTitle className="pt-2 md:pt-0 xl:w-max" style={{ color: color }}>
					{titulo}
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col md:flex-row items-center md:pt-6 md:gap-2">
				<p className="text-darkCl text-sm lg:text-base">{parrafo}</p>
				<div
					className={cn(
						`flex items-center justify-center rounded-full h-12 w-12 min-w-12 min-h-12  text-white mt-2 md:mt-0 `
					)}
					style={{ background: color }}
				>
					<LinkIcon className="w-7 h-7 text-white" />{" "}
				</div>
			</CardContent>
		</Card>
	);
}
