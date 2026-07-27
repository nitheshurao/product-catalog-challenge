import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();

  console.log(products);

  return (
    <div>
      <h1>{products.length} Products Loaded</h1>
    </div>
  );
}