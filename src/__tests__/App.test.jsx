import App from "../App.jsx";
import { it, describe } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'

describe("App.jsx", () => {
  it("checks if the App.jsx renders correctly", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
  });
});
