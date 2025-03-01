import { CalendarIcon, InfoIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

export function HoverCardInfo() {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Button variant="link">
					<InfoIcon />
				</Button>
			</HoverCardTrigger>
			<HoverCardContent className="w-80">
				<div className="flex justify-between space-x-4">
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">
							Cada incidencia se encuadra en el siguiente contexto
						</h4>
						<p className="text-sm"></p>
						<div className="flex items-center pt-2">
							<CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
							<span className="text-xs text-muted-foreground">
								Joined December 2021
							</span>
						</div>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
