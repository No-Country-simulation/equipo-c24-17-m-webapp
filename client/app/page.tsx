import Header from "@/components/Header";
import Homepage from "./homepage";

export default async function Home() {
	return (
		<div className=" max-w-[1100px]">
			<Header />
			<Homepage />
		</div>
	);
}
