import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider, useCart } from "@/context/CartContext";

const product = {
  id: 1,
  title: "Phone",
  description: "Test Phone",
  price: 100,
  thumbnail: "",
  images: [],
};

function TestComponent() {
  const { cartCount, addToCart, removeFromCart } = useCart();

  return (
    <>
      <button onClick={() => addToCart(product)}>Add</button>

      <button onClick={() => removeFromCart(product.id)}>
        Remove
      </button>

      <span data-testid="cart-count">{cartCount}</span>
    </>
  );
}

beforeEach(() => {
  localStorage.clear();
});

describe("CartContext", () => {
  test("adds a product to cart", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByTestId("cart-count")).toHaveTextContent("1");
  });

  test("increments quantity when adding same product", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    const addButton = screen.getByText("Add");

    fireEvent.click(addButton);
    fireEvent.click(addButton);

    expect(screen.getByTestId("cart-count")).toHaveTextContent("2");
  });

  test("removes a product from cart", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Add"));

    fireEvent.click(screen.getByText("Remove"));

    expect(screen.getByTestId("cart-count")).toHaveTextContent("0");
  });

  test("persists cart to localStorage", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Add"));

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    expect(cart.length).toBe(1);
    expect(cart[0].title).toBe("Phone");
  });

  test("loads cart from localStorage", () => {
    localStorage.setItem(
      "cart",
      JSON.stringify([
        {
          ...product,
          quantity: 2,
        },
      ])
    );

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(screen.getByTestId("cart-count")).toHaveTextContent("2");
  });

  test("cart count is zero initially", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(screen.getByTestId("cart-count")).toHaveTextContent("0");
  });
});