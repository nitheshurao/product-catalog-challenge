"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-6xl p-8">
        <h1 className="text-3xl font-bold">Cart</h1>

        <p className="mt-6">Your cart is empty.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Shopping Cart
      </h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={80}
                height={80}
                className="rounded"
              />

              <div>
                <h2 className="font-semibold">
                  {item.title}
                </h2>

                <p>Quantity: {item.quantity}</p>

                <p>${item.price}</p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="rounded bg-red-500 px-4 py-2 text-white"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="border-t pt-6 text-right">
          <h2 className="text-2xl font-bold">
            Total: ${total.toFixed(2)}
          </h2>
        </div>
      </div>
    </main>
  );
}