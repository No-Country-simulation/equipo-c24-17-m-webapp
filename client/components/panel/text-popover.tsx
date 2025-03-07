import { Button } from "@/components/ui/button";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { NotepadText } from "lucide-react";

export function TextPopover({ text }: { text: string }) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="ghost">
					<NotepadText />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<p className="">{text}</p>
			</PopoverContent>
		</Popover>
	);
}
