import EditTask from "../components/EditTask/EditTask";
import { it, describe, vi } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
//TODO:it requires mocks in vitest go thorugh that;

describe.skip("EditTask.js", () => {
  it("renders correctly", () => {
    const location = {
      state: {
        taskTitle: "test title",
        taskDescription: "test description",
      },
    };

    render(
      <MemoryRouter>
        <EditTask location={location}/>
      </MemoryRouter>
    );
  });
  // create a mock function for the updateTask function
  it("calls updateTask function when the form is submitted", () => {
    const location = {
      state: {
        taskTitle: "test title",
        taskDescription: "test description",
      },
    };

    const updateTask = vi.fn();
    render(
      <MemoryRouter>
      <EditTask updateTask={updateTask} />,
      { location }
     </MemoryRouter>
    );
  });
});
