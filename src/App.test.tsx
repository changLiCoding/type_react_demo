import App from "./App";
import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";

Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(),
		removeListener: vi.fn(),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
	})),
});

describe("App", () => {
	it("Should render without crashing", () => {
		render(<App />);
		expect(screen.getByText("Email")).toBeInTheDocument();
	});
});
