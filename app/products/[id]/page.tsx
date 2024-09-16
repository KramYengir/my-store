// app/products/[id]/page.tsx
import { use } from "react";
import Image from "next/image";
import { climbingProducts } from "@/data/products";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  stock: number;
}

const fetchProduct = async (id: string): Promise<Product | null> => {
  // Dummy data or fetch from an API/Database
  const products: Product[] = climbingProducts;

  // Simulating fetching the product by id
  return products.find((product) => product.id === id) || null;
};

interface ProductPageProps {
  params: { id: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const product = use(fetchProduct(params.id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8">
      {/* Product Image */}
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="w-full h-auto"
      />

      {/* Product Details */}
      <div className="px-6 py-4">
        <h1 className="font-bold text-2xl mb-4">{product.name}</h1>
        <p className="text-gray-700 text-lg mb-4">{product.description}</p>
        <p className="text-gray-900 text-xl font-semibold mb-4">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-600 mb-4">{product.stock} left in stock</p>

        {/* Add to Cart Button */}
        <button
          className="snipcart-add-item bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          data-item-id={product.id}
          data-item-name={product.name}
          data-item-price={product.price}
          data-item-url={`/products/${product.id}`}
          data-item-description={product.description}
          data-item-image={product.image}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
