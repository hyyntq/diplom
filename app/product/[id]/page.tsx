import Image from "next/image";
import { getProductApi } from "@/services/product";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductApi(Number(params.id));

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <div className="flex gap-4">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={150}
          height={150}
          className="w-1/2 h-auto object-cover"
        />
        <div>
          <p className="text-lg font-semibold mb-2">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
