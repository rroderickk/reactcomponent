import { render, screen } from "@testing-library/react";
import ButtonNeon from "./ButtonNeon";

test("renders learn react link", () => {
	render(<ButtonNeon />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
