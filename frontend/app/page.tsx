import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  try {
    const products = await getProducts();

    return (
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">
          Product Catalog
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>
    );
  } catch {
    return (
      <main className="p-8">
        <h1 className="text-red-600 text-xl">
          Failed to load products.
        </h1>
      </main>
    );
  }
}