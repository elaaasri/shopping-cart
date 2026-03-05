import Header from "../components/Header/Header";
import { render, screen, within } from "@testing-library/react";
import { vi, beforeEach, describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import SearchBox from "../components/SearchBox/SearchBox";

describe("Header", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header
          organizedProducts={{ propTest: "test" }}
          setShowSearchBox={vi.fn()}
        />
      </MemoryRouter>,
    );
  });

  it("renders header logo with the correct src", () => {
    const logo = screen.getByRole("img", { name: /header logo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/src/assets/icons/logo-icon.webp");
  });

  it("renders header links", () => {
    const nav = screen.getByRole("navigation");
    const links = within(nav).getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  it("renders links paths", async () => {
    const logo = screen.getByRole("link", { name: /header logo/i });
    const homeLink = screen.getByRole("link", { name: /home/i });
    const shopLink = screen.getByRole("link", { name: /shop/i });
    const cartLink = screen.getByRole("link", { name: /cart/i });
    const cartIcon = screen.getByTestId("cart-icon-link");

    expect(logo).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
    expect(cartIcon).toBeInTheDocument();

    await userEvent.click(logo);
    await userEvent.click(homeLink);
    await userEvent.click(shopLink);
    await userEvent.click(cartLink);
    await userEvent.click(cartIcon);

    expect(logo).toHaveAttribute("href", "/");
    expect(homeLink).toHaveAttribute("href", "/");
    expect(shopLink).toHaveAttribute("href", "/shop");
    expect(cartLink).toHaveAttribute("href", "/cart");
    expect(cartIcon).toHaveAttribute("href", "/cart");
  });

  it("renders search icon and overlay", async () => {
    render(<SearchBox />);

    const searchIcon = screen.getByTestId("search-icon");
    expect(searchIcon).toBeInTheDocument();

    await userEvent.click(searchIcon);
    const popupText = await screen.findByText(/SEARCH OUR ITEMS/i);
    const overlay = screen.getByTestId("search-overlay");
    expect(popupText).toBeInTheDocument();
    expect(overlay).toBeInTheDocument();
  });

  it("renders header cart count", async () => {
    const cartIcon = screen.getByTestId("cart-button-count");
    expect(cartIcon).toHaveTextContent("1");
  });
});
