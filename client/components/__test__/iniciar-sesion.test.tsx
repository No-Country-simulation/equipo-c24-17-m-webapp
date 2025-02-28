import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IniciarSesion from "../iniciar-sesion";
import { signIn } from "@/auth";

vi.mock("@/auth", () => ({
	signIn: vi.fn(),
}));

describe("IniciarSesion componente", () => {
	it("renderizar el boton y la imagen de google", () => {
		render(<IniciarSesion />);
		const button = screen.getByRole("button", {
			name: /Continuar con Google/i,
		});
		expect(button).toBeInTheDocument();
		const image = screen.getByAltText("google logo");
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute("src", "/google-icon.svg");
	});

	it("ejecutar signin fn on click", async () => {
		render(<IniciarSesion />);
		const button = screen.getByRole("button", {
			name: /Continuar con Google/i,
		});
		await userEvent.click(button);
		expect(signIn).toHaveBeenCalledWith("google", {
			redirectTo: "/panel/familiares",
		});
	});
});
