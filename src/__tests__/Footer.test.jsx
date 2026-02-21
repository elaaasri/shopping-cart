import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Footer from "../components/Footer/Footer";
import { MemoryRouter } from "react-router";

describe("Footer", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
  });

  it("renders footer headline", () => {
    expect(screen.getAllByRole("heading")).toHaveLength(2);
    expect(
      screen.getByRole("heading", { name: /BE A PART OF THE ESSENTIALS/i }),
    ).toBeInTheDocument();
  });
});
