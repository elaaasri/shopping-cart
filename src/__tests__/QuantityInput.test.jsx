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
        },
      ],
    },
    loading: false,
    error: null,
  }),
}));

describe("Quantity Input", () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop/beauty/productTitle"],
    });
    render(<RouterProvider router={router} />);
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
});
