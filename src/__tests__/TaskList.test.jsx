import TaskList from "../components/TaskList/TaskList.jsx";
import { it, describe } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

describe("TaskList.jsx", () => {
  it("checks if the TaskList renders correctly", () => {
    render(
      <MemoryRouter>
        <TaskList />
      </MemoryRouter>
    );
  });
});
