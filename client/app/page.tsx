import Header from "@/components/Header";
import Showcase from "./showcase";
import Conocenos from "./conocenos";
import { PreguntasFrecuentes } from "./preguntas-frecuentes";
import { Footer } from "@/components/Footer";

export default async function Home() {
	return (
		<div className="bg-white">
			<Header />
			<Showcase />
			<Conocenos />			
			<PreguntasFrecuentes />
			<Footer />
		</div>
	);
}
