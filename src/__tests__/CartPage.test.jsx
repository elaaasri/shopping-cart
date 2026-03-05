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

describe("Cart Page empty state", () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/cart"],
    });
    render(<RouterProvider router={router} />);
  });

  it("renders headline", () => {
    expect(
      screen.getByRole("heading", {
        name: /YOUR CART IS LOOKING EMPTY/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders shop link", async () => {
    const shopLink = screen.getByRole("link", {
      name: /SHOP NOW/i,
    });

    await userEvent.click(shopLink);

    const mockText = await screen.findByText("Shop Page Mock");

    expect(mockText).toBeInTheDocument();
  });
});

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

  it("renders remove button after adding the product to the cart", async () => {
    await goToCartWithItem();

    expect(screen.getByText(/productTitle/i)).toBeInTheDocument();

    const removeBtn = screen.getByRole("button", { name: /Remove/i });
    await userEvent.click(removeBtn);

    expect(screen.getByText(/YOUR CART IS LOOKING EMPTY/i)).toBeInTheDocument();
  });

  it("check header cart count after clicking remove button", async () => {
    await goToCartWithItem();

    const removeBtn = screen.getByRole("button", { name: /Remove/i });
    await userEvent.click(removeBtn);
    expect(screen.getByTestId("cart-button-count")).toHaveTextContent("0");
  });

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

  // it("renders header cart count when clicking", async () => {
  //   const addToCartBtn = screen.getByRole("button", { name: /Add To Cart/i });

  //   await userEvent.click(addToCartBtn);

  //   const cartBtnCount = screen.getByTestId("cart-button-count");
  //   expect(cartBtnCount).toBeInTheDocument();
  //   expect(cartBtnCount).toHaveTextContent("1");
  // });
});

// header count to 0
// stock
// search
