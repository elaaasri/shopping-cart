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

// vi.mock("/src/pages/CategoryPage/components/CategoryNav.jsx", () => ({
//   default: () => <div>Category Nav Mock</div>,
// }));

// vi.mock("/src/pages/CategoryPage/components/CategoryProducts.jsx", () => ({
//   default: () => <div>Category Products Mock</div>,
// }));

describe("Shop Page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/shop/:category"]}>
        <CategoryPage />
        {/* <Routes>
          <Route path="/shop/:category" element={<CategoryPage />} />
        </Routes> */}
        {/* <Routes>
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<CategoryPage />} />
        </Routes> */}
      </MemoryRouter>,
    );
  });

  it("renders category page nav links", () => {
    //   const headline = screen.getByRole("heading", { name: /CATEGORIES/i });
    //   expect(headline).toBeInTheDocument();
    //   screen.debug(headline);
    // const text = screen.getByText(/beauty/i);
    expect(screen.getByText(/beauty/i)).toBeInTheDocument();
    expect(screen.getByText(/fragrances/i)).toBeInTheDocument();
    screen.debug();
  });

  it("renders category page nav paths", async () => {
    //   const headline = screen.getByRole("heading", { name: /CATEGORIES/i });
    //   expect(headline).toBeInTheDocument();
    //   screen.debug(headline);
    //   const text = screen.getByText(/beauty/i);

    const beautyLink = screen.getByText(/beauty/i);
    expect(beautyLink).toHaveAttribute("href", "/shop/beauty");
    await userEvent.click(beautyLink);
    const productTitle = await screen.findByText(
      /Essence Mascara Lash Princess/i,
    );
    expect(productTitle).toBeInTheDocument();
    // expect(window.location.pathname).toBe("/shop/beauty");
    // expect(screen.getByText(/beauty/i)).toBeInTheDocument();
    // expect(screen.getByText(/fragrances/i)).toBeInTheDocument();
    screen.debug(productTitle);
  });

  //   it("renders category page products ", () => {
  //     //   const headline = screen.getByRole("heading", { name: /CATEGORIES/i });
  //     //   expect(headline).toBeInTheDocument();
  //     //   screen.debug(headline);
  //     // const text = screen.getByText(/beauty/i);

  //     screen.debug();
  //   });

  //   it("renders categories links", () => {
  //     const links = screen.getAllByRole("link");
  //     expect(links).toHaveLength(2);
  //     links.forEach((l) => {
  //       expect(l).toBeInTheDocument();
  //       expect(l).toHaveAttribute("href", `/shop/${l.textContent.toLowerCase()}`);
  //     });
  //   });

  //   it("navigate to category page", async () => {
  //     const beautyLink = screen.getByRole("link", { name: /beauty/i });
  //     await userEvent.click(beautyLink);
  //     const text = await screen.findByText(/Category Page Mock/i);
  //     expect(text).toBeInTheDocument();
  //   });
});

// check image src on shoppage
