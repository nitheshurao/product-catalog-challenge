"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="border-b  shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          Product Catalog
        </Link>

        <Link
          href="/cart"
          className="relative flex items-center gap-2"
        >
          <ShoppingCart size={24} />

          <span>Cart</span>

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-sm text-white">
            {cartCount}
          </span>
        </Link>
      </nav>
    </header>
  );
}