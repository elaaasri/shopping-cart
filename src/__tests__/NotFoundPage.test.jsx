import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../app/routes";

vi.mock("../pages/HomePage/HomePage", () => ({
  default: () => <div>Home Page Mock</div>,
}));

describe("Not Found Page", () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/errorPath"],
    });
    render(<RouterProvider router={router} />);
  });

  it("renders error page", () => {
    expect(screen.getByText(/Can't Found The Page/i)).toBeInTheDocument();
  });

  it("renders home link", async () => {
    const homeBtn = screen.getByRole("button", { name: /BACK TO HOME/i });
    await userEvent.click(homeBtn);
    expect(await screen.findByText(/Home Page Mock/i)).toBeInTheDocument();
  });
});
