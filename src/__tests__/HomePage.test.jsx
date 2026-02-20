import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../app/routes";

describe("Header", () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
  });

  it("renders home page headline ", () => {
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBe(5);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      /ESSENTIALS/i,
    );
  });

  it("renders shop path", async () => {
    const shopButton = screen.getByRole("link", { name: /SHOP NOW/i });
    expect(shopButton).toBeInTheDocument();
    expect(shopButton).toHaveAttribute("href", "/shop");
    await userEvent.click(shopButton);
    const text = await screen.findByText(/CATEGORIES/i);
    expect(text).toBeInTheDocument();
  });

  it("renders hero image", () => {
    const heroImg = screen.getByTestId("hero-image");
    expect(heroImg).toBeInTheDocument();
  });
});
