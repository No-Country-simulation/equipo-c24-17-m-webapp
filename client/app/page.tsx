import { getWeather } from "./action";

export default async function Home() {
	const data = await getWeather();
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center mt-20">
			<h1 className="text-3xl">Proyecto No Country</h1>
			<ul>
				{data.map((item, index) => (
					<li key={index}>{item.summary}</li>
				))}
			</ul>
		</main>
	);
}
