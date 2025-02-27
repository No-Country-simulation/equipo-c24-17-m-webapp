import Header from "@/components/Header";
import Homepage from "./homepage";

export default async function Home() {
	return (
		<div className="bg-white">
			<Header />
			<Homepage />
		</div>
	);
}
