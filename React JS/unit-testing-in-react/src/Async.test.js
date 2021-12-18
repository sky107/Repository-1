import { render, screen } from "@testing-library/react";

import Async from "./async";

describe("async component", () => {
	test("renders posts if request succeds", async () => {
		window.fetch = jest.fn(); //dummy function to simulate mock 
		window.fetch.mockResolvedValueOnce({
			json: async () => [{ id: "p1", title: "First post" }],
		});

		render(<Async />);
		// const listItemEl=screen.getAllByRole('listitem'); //failed becuase fetch takes time useEffect 2nd cycle
		const listItemElPromise = await screen.findAllByRole("listitem");
		expect(listItemElPromise).not.toHaveLength(0);
	});
});