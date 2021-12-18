import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe("greetings suite", () => {
	// description
	test("check for a text", () => {
		//arrrange
		render(<Greetings />);
		// Act
		//...nothing

		//act
		//assert
		const el = screen.getByText("How are you?");
		expect(el).toBeInTheDocument();
		//
	});

	test("check for Millionare if button was not clicked", () => {
		// arrange
		render(<Greetings />);
		//act

		//assert
		const el = screen.getByText("Millionare");
		expect(el).toBeInTheDocument();
	});

	test("check for Billionare if button was clicked", () => {
		render(<Greetings />);

		const btnElement = screen.getByRole("button");
		userEvent.click(btnElement);

		const outputText = screen.getByText("Billionare");
		expect(outputText).toBeInTheDocument();
	});
});