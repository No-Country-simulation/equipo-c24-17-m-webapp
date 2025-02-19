import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { CerrarSesion } from "../cerrar-sesion";
import { signOut } from "@/auth";

vi.mock("@/auth", () => ({
	signOut: vi.fn(),
}));

describe("CerrarSesion", () => {
	it("renderizar el boton", () => {
		render(<CerrarSesion />);
		expect(screen.getByText("Cerrar Sesión")).toBeInTheDocument();
	});

	it("ejecurar signout fn on click", async () => {
		render(<CerrarSesion />);
		const button = screen.getByText("Cerrar Sesión");
		await userEvent.click(button);
		expect(signOut).toHaveBeenCalledWith({ redirectTo: "/" });
	});
});
