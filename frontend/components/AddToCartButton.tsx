"use client";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
}

export default function AddToCartButton({
  product,
}: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-6 rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
    >
      Add To Cart
    </button>
  );
}