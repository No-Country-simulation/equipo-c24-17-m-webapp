import Header from "@/components/Header";
import Showcase from "./showcase";
import Conocenos from "./conocenos";
import { Guia } from "./guia";
import { PreguntasFrecuentes } from "./preguntas-frecuentes";


export default async function Home() {
	return (
		<div className="bg-white">
			<Header />
			<Showcase />
			<Conocenos />
			<Guia />
			
			<PreguntasFrecuentes />
		</div>
	);
}
