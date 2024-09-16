import { climbingProducts } from "../data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-6xl uppercase text-blue-900 font-bold tracking-wide text-center pb-12">
        Costa Climbing Store
      </h1>

      <div className="flex flex-wrap justify-center gap-5">
        {climbingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button className="snipcart-checkout fixed bottom-10 right-10 bg-green-500 text-white p-4">
        Cart (<span className="snipcart-items-count"></span>)
      </button>
    </main>
  );
}
