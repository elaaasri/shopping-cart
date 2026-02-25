import * as reactRouter from "react-router";
import { MemoryRouter, Routes, Route } from "react-router";
import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import CategoryPage from "../pages/CategoryPage/CategoryPage";

vi.spyOn(reactRouter, "useOutletContext").mockReturnValue({
  // test two categories
  categories: [{ catName: "beauty" }, { catName: "fragrances" }],
  // test beauty product once
  products: [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      category: "beauty",
      price: 9.99,
      discountPercentage: 10.48,
      images: [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
      ],
    },
  ],
});

vi.spyOn(reactRouter, "useParams").mockReturnValue({
  category: "beauty",
});

describe("Shop Page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <CategoryPage />
      </MemoryRouter>,
    );
  });

  it("renders category page nav links", () => {
    expect(screen.getByText(/beauty/i)).toBeInTheDocument();
    expect(screen.getByText(/fragrances/i)).toBeInTheDocument();
    screen.debug();
  });

  it("renders category page nav paths", async () => {
    const beautyLink = screen.getByText(/beauty/i);
    expect(beautyLink).toHaveAttribute("href", "/shop/beauty");
    await userEvent.click(beautyLink);
    const productTitle = await screen.findByText(
      /Essence Mascara Lash Princess/i,
    );
    expect(productTitle).toBeInTheDocument();
  });

  it("renders correct product image", () => {
    const image = screen.getByRole("img", {
      name: /Essence Mascara Lash Princess image/i,
    });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    );
  });
});

// check image src on shoppage
