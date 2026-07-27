import Image from "next/image";
import { notFound } from "next/navigation";

import { getProduct } from "@/lib/api";
import AddToCartButton from "@/components/AddToCartButton";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetails({
  params,
}: Props) {
  try {
    const { id } = await params;

    const product = await getProduct(Number(id));

    return (
      <main className="max-w-5xl mx-auto p-8">
        <div className="grid md:grid-cols-2 gap-10">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg w-full object-cover"
          />

          <div>
            <h1 className="text-4xl font-bold">{product.title}</h1>

            <p className="mt-6">{product.description}</p>

            <p className="mt-8 text-3xl font-bold">
              ${product.price}
            </p>

            <AddToCartButton product={product} />
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}