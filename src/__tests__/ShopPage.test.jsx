import * as reactRouter from "react-router";
import { MemoryRouter, Routes, Route } from "react-router";
import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import ShopPage from "../pages/ShopPage/ShopPage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";

const mockOutlet = vi.spyOn(reactRouter, "useOutletContext");

vi.mock("/src/pages/CategoryPage/CategoryPage.jsx", () => ({
  default: () => <div>Category Page Mock</div>,
}));

describe("Shop Page", () => {
  beforeEach(() => {
    mockOutlet.mockReturnValue({
      loading: false,
      error: null,
      categories: [{ catName: "beauty" }, { catName: "fragrances" }],
    });

    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Routes>
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<CategoryPage />} />
        </Routes>
      </MemoryRouter>,
    );
  });

  it("renders shop page headline", () => {
    const headline = screen.getByRole("heading", { name: /CATEGORIES/i });
    expect(headline).toBeInTheDocument();
  });

  it("renders categories links", () => {
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
    links.forEach((l) => {
      expect(l).toBeInTheDocument();
      expect(l).toHaveAttribute("href", `/shop/${l.textContent.toLowerCase()}`);
    });
  });

  it("navigate to category page", async () => {
    const beautyLink = screen.getByRole("link", { name: /beauty/i });
    await userEvent.click(beautyLink);
    const text = await screen.findByText(/Category Page Mock/i);
    expect(text).toBeInTheDocument();
  });
});

describe("Loading Page State", () => {
  beforeEach(() => {
    mockOutlet.mockReturnValue({
      loading: true,
      error: null,
      categories: [],
    });

    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Routes>
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </MemoryRouter>,
    );
  });

  it("renders loading page", () => {
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});

// add loading and error tests
// add search box
// add image slider
// not found page
