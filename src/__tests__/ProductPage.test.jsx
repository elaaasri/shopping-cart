import * as reactRouter from "react-router";
import { MemoryRouter, Routes, Route } from "react-router";
import { render, screen, within } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import ProductPage from "../pages/ProductPage/ProductPage";
import ShopPage from "../pages/ShopPage/ShopPage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import QuantityInput from "../components/QuantityInput/QuantityInput";
import { exp } from "three/tsl";

//   const { products, setCartItems, organizedProducts } = useOutletContext();
vi.spyOn(reactRouter, "useOutletContext").mockReturnValue({
  products: [
    {
      id: 1,
      title: "productTitle",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
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
});

// vi.spyOn(reactRouter, "useParams").mockReturnValue({
//   category: "beauty",
//   title: "anas",
// });

vi.mock("/src/pages/ShopPage/ShopPage.jsx", () => ({
  default: () => <div>Shop Page Mock</div>,
}));

vi.mock("/src/pages/CategoryPage/CategoryPage.jsx", () => ({
  default: () => <div>Category Page Mock</div>,
}));

// fixin category not readed so the productpage not redndered
describe("Shop Page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/shop/beauty/productTitle"]}>
        <Routes>
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<CategoryPage />} />
          <Route path="/shop/:category/:title" element={<ProductPage />} />
        </Routes>
      </MemoryRouter>,
    );
  });

  it("renders product title", () => {
    expect(
      screen.getByText(/Essence Mascara Lash Princess/i),
    ).toBeInTheDocument();
  });

  it("navigates to shop page", async () => {
    const nav = screen.getByRole("navigation");
    const shopLink = within(nav).getByRole("link", { name: /shop/i });

    await userEvent.click(shopLink);

    const shopText = await screen.findByText(/Shop Page Mock/i);
    expect(shopText).toBeInTheDocument();
  });

  it("navigates to category page", async () => {
    const nav = screen.getByRole("navigation");
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

  it("renders add to cart button", async () => {
    const addToCartBtn = screen.getByRole("button", { name: /Add To Cart/i });

    await userEvent.click(addToCartBtn);
    const addedText = await screen.findByText(/Added To Card/i);
    expect(addedText).toBeInTheDocument();

    // const input = screen.getByRole("spinbutton");
    // expect(input).toHaveValue(1);
    // const increaseBtn = screen.getByRole("button", { name: "+" });
    // const decreaseBtn = screen.getByRole("button", { name: "-" });
    // expect(input).toHaveValue(2);
    // await userEvent.click(decreaseBtn);
    // expect(input).toHaveValue(1);
  });
});
// QUANTITY:
// Add to Cart
// Added To Card!
// style groceries to green
// fix images paths on shop page component
// screen debug
