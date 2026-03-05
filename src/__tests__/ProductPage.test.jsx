import { render, screen, within } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../app/routes";

vi.mock("/src/hooks/useFetch.js", () => ({
  default: () => ({
    data: {
      products: [
        {
          id: 1,
          title: "productTitle",
          description: "description",
          category: "beauty",
          price: 9.99,
          discountPercentage: 10.48,
          rating: 2.56,
          stock: 99,
          reviews: [
            {
              rating: 3,
              comment: "Would not recommend!",
              date: "2025-04-30T09:41:02.053Z",
              reviewerName: "Eleanor Collins",
              reviewerEmail: "eleanor.collins@x.dummyjson.com",
            },
            {
              rating: 4,
              comment: "Very satisfied!",
              date: "2025-04-30T09:41:02.053Z",
              reviewerName: "Lucas Gordon",
              reviewerEmail: "lucas.gordon@x.dummyjson.com",
            },
            {
              rating: 5,
              comment: "Highly impressed!",
              date: "2025-04-30T09:41:02.053Z",
              reviewerName: "Eleanor Collins",
              reviewerEmail: "eleanor.collins@x.dummyjson.com",
            },
          ],
          images: [
            "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
          ],
        },
      ],
    },
    loading: false,
    error: null,
  }),
}));

vi.mock("/src/pages/ShopPage/ShopPage.jsx", () => ({
  default: () => <div>Shop Page Mock</div>,
}));

vi.mock("/src/pages/CategoryPage/CategoryPage.jsx", () => ({
  default: () => <div>Category Page Mock</div>,
}));

describe("Product Page", () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop/beauty/productTitle"],
    });
    render(<RouterProvider router={router} />);
  });

  it("renders product title", () => {
    expect(screen.getByTestId("product-title")).toBeInTheDocument();
  });

  it("navigates to shop page", async () => {
    const nav = screen.getByRole("navigation", { name: /bread crumb nav/i });
    const shopLink = within(nav).getByRole("link", { name: /shop/i });

    await userEvent.click(shopLink);

    const shopText = await screen.findByText(/Shop Page Mock/i);
    expect(shopText).toBeInTheDocument();
  });

  it("navigates to category page", async () => {
    const nav = screen.getByRole("navigation", { name: /bread crumb nav/i });
    const categoryLink = within(nav).getByRole("link", { name: /beauty/i });

    await userEvent.click(categoryLink);

    const categoryText = await screen.findByText(/Category Page Mock/i);
    expect(categoryText).toBeInTheDocument();
  });

  it("renders quantity input", async () => {
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveValue(1);

    const increaseBtn = screen.getByRole("button", { name: "+" });
    const decreaseBtn = screen.getByRole("button", { name: "-" });

    await userEvent.click(increaseBtn);
    expect(input).toHaveValue(2);

    await userEvent.click(decreaseBtn);
    expect(input).toHaveValue(1);
  });

  it("renders 'Added To Cart' after clicking", async () => {
    const addToCartBtn = screen.getByRole("button", { name: /Add To Cart/i });

    await userEvent.click(addToCartBtn);

    const addedText = await screen.findByText(/Added To Cart/i);
    expect(addedText).toBeInTheDocument();
  });

  it("renders header cart count when clicking", async () => {
    const addToCartBtn = screen.getByRole("button", { name: /Add To Cart/i });

    await userEvent.click(addToCartBtn);

    const cartBtnCount = screen.getByTestId("cart-button-count");
    expect(cartBtnCount).toBeInTheDocument();
    expect(cartBtnCount).toHaveTextContent("1");
  });
});
