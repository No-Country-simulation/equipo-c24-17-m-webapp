import Header from "@/components/Header";

export default async function Home() {
	return (
		<div className=" max-w-[1100px]">
			<Header />
			<main className="flex flex-col gap-8 row-start-2 items-center mt-40">
				<h1 className="text-3xl">Te acompaño</h1>
			</main>
		</div>
	);
}
