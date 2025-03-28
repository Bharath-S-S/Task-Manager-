import TaskItem from "../components/TaskList/TaskItem.jsx";
import { it, describe, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("TaskItem.jsx", () => {
  it("renders TaskItem.jsx successfully", () => {
    render(
      <MemoryRouter>
        <TaskItem />
      </MemoryRouter>
    );
  });

  it("Checkes the presence of button the component", async () => {
    render(
      <MemoryRouter>
        <TaskItem />
      </MemoryRouter>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
