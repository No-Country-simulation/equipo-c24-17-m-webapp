import Header from "@/components/Header";
import Showcase from "./showcase";
import Conocenos from "./conocenos";

export default async function Home() {
	return (
		<div className="bg-white">
			<Header />
			<Showcase />
			<Conocenos />
		</div>
	);
}
