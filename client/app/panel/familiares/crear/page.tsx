import { getSession } from "@/lib/database";
import FormPariente from "./FormPariente";

export default async function page() {
	const { email } = await getSession();

	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-2xl">Agregar Familiar</h1>
			<div>
				<FormPariente email={email} />
			</div>
		</div>
	);
}
