import { render, screen, waitFor } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router";
import routes from "../app/routes";
import SearchBox from "../components/SearchBox/SearchBox";

describe("Search Box", () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
  });

  it("open and close search box", async () => {
    const searchIcon = screen.getByTestId("search-icon");
    await userEvent.click(searchIcon);

    expect(await screen.findByText(/SEARCH OUR ITEMS/i)).toBeInTheDocument();

    const closeIcon = screen.getByTestId("close-icon");
    await userEvent.click(closeIcon);

    await waitFor(() => {
      expect(screen.queryByText(/SEARCH OUR ITEMS/i)).not.toBeInTheDocument();
    });
  });

  it("renders search result and product path", async () => {
    const products = [
      {
        title: "kiwi",
        price: 2.49,
        category: "groceries",
      },
    ];

    render(
      <MemoryRouter>
        <SearchBox setShowSearchBox={vi.fn()} products={products} />
      </MemoryRouter>,
    );

    const searchInput = screen.getByTestId("search-input");
    await userEvent.type(searchInput, "kiwi");

    expect(await screen.findByText("2.49$")).toBeInTheDocument();

    const kiwiProduct = screen.getByRole("link", { name: /kiwi/i });
    await userEvent.click(kiwiProduct);

    expect(kiwiProduct).toHaveAttribute(
      "href",
      `/shop/${products[0].category}/kiwi`,
    );
  });
});
