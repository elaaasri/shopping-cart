import { vi, expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

// mock IntersectionObserver globally :
class IntersectionObserverMock {
  constructor() {}
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
// eslint-disable-next-line no-undef
global.IntersectionObserver = IntersectionObserverMock;

expect.extend(matchers);

afterEach(() => {
  cleanup();
  vi.clearAllMocks;
});
