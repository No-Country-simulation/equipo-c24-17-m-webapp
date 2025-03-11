import React from "react";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import ShowcaseGuias from "./showcase";
import PrimerosPasos from "./primeros-pasos";
import Diagnostico from "./diagnostico";
import Cud from "./cud";
import Terapias from "./terapias";
import Unirme from "./unirme";

export default function page() {
	return (
		<div className="bg-bgSoftCl">
			<Header />
			<ShowcaseGuias />
			<PrimerosPasos />
			<Diagnostico />
			<Cud />
			<Terapias />
			<Unirme />
			<Footer />
		</div>
	);
}
