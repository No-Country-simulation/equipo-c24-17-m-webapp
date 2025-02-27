import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ArrowUpRight } from "lucide-react";

const invoices = [
	{
		invoice: "Tomografia",
		paymentStatus: "08/10/22",
		totalAmount: "$250.00",
		paymentMethod: "ninguna",
	},
	{
		invoice: "Placa",
		paymentStatus: "12/11/22",
		totalAmount: "08/08/223",
		paymentMethod: "ninguna",
	},
	{
		invoice: "Electroencefalograma",
		paymentStatus: "08/02/22",
		totalAmount: "$350.00",
		paymentMethod: "ninguna",
	},

	{
		invoice: "Resonancia Magnética ",
		paymentStatus: "08/02/22",
		totalAmount: "$550.00",
		paymentMethod: "ninguna",
	},

	{
		invoice: "Tomografía Computarizada",
		paymentStatus: "08/02/23",
		totalAmount: "$300.00",
		paymentMethod: "ninguna",
	},
];

export function TablaEstudios() {
	return (
		<Table>
			<TableCaption>
				Lista de todos los estudios realizados hasta la fecha.
			</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Estudio</TableHead>
					<TableHead>Fecha</TableHead>
					<TableHead>Descripcion</TableHead>
					<TableHead className="text-right">Imagenes</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{invoices.map((invoice) => (
					<TableRow key={invoice.invoice}>
						<TableCell className="font-medium">{invoice.invoice}</TableCell>
						<TableCell>{invoice.paymentStatus}</TableCell>
						<TableCell>{invoice.paymentMethod}</TableCell>
						<TableCell className="text-right">
							{" "}
							<Button variant="ghost">
								<ArrowUpRight />
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter></TableFooter>
		</Table>
	);
}
