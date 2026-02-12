// import { createMemoryRouter, RouterProvider } from "react-router";
import { vi, beforeEach, describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
// import routes from "../app/routes";
import Header from "../components/Header/Header";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import { EPSILON } from "three/tsl";

describe("Header", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header organizedProducts={{}} setShowSearchBox={vi.fn()} />
      </MemoryRouter>,
    );
  });

  it("renders header logo with the correct src", () => {
    const logo = screen.getByRole("img", { name: /header logo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/src/assets/icons/logo-icon.webp");
    screen.debug();
  });

  it("renders header links", () => {
    const nav = screen.getByRole("navigation");
    const links = within(nav).getAllByRole("link");
    expect(links).toHaveLength(3);
    screen.debug();
  });

  it("renders links paths", async () => {
    const homeLink = screen.getByRole("link", { name: /home/i });
    const shopLink = screen.getByRole("link", { name: /shop/i });
    const cartLink = screen.getByRole("link", { name: /cart/i });

    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();

    await userEvent.click(homeLink);
    await userEvent.click(shopLink);
    await userEvent.click(cartLink);

    expect(homeLink).toHaveAttribute("href", "/");
    expect(shopLink).toHaveAttribute("href", "/shop");
    expect(cartLink).toHaveAttribute("href", "/cart");

    screen.debug();
  });
});
