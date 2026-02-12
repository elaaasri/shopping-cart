import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../app/App";
import routes from "../app/routes";

describe("App", () => {
  it("renders headline", () => {
    const router = createMemoryRouter(routes);
    render(
      <RouterProvider router={router}>
        <App />
      </RouterProvider>,
    );

    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBe(5);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      /ESSENTIALS/i,
    );
    screen.debug();
  });
});
