import { render, screen } from "@testing-library/react";
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
          category: "beauty",
          price: 9.99,
          stock: 99,
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

describe("Cart Page with Items", () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop/beauty/productTitle"],
    });
    render(<RouterProvider router={router} />);
  });

  const goToCartWithItem = async () => {
    const addBtn = screen.getByRole("button", { name: /add to cart/i });
    await userEvent.click(addBtn);

    const cartLink = screen.getByRole("link", { name: /cart/i });
    await userEvent.click(cartLink);
  };

  it("renders checkout button", async () => {
    await goToCartWithItem();

    const mockAlert = vi.spyOn(window, "alert").mockImplementation(() => {});
    const checkoutBtn = screen.getByRole("button", { name: /CHECKOUT/i });

    await userEvent.click(checkoutBtn);
    expect(mockAlert).toHaveBeenCalledWith("Checkout Successful!");
  });

  it("renders keep shoping link", async () => {
    await goToCartWithItem();

    const shopLink = screen.getByRole("link", { name: /KEEP SHOPING/i });
    await userEvent.click(shopLink);

    expect(await screen.findByText(/Shop Page Mock/i)).toBeInTheDocument();
  });
});
