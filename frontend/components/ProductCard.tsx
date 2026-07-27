import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer p-4">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={250}
          height={250}
          className="w-full h-52 object-cover rounded-md"
        />

        <h2 className="mt-4 font-semibold text-lg">
          {product.title}
        </h2>

        <p className="text-blue-600 font-bold mt-2">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}