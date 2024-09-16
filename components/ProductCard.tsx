import React from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  stock: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col justify-around max-w-xs rounded overflow-hidden shadow-lg bg-white">
      {/* Product Image */}
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />

      {/* Product Info */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-gray-900 font-semibold mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Add to Cart Button */}
      <div className="px-6 py-4 flex justify-between items-center">
        <button
          className={`snipcart-add-item bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
            product.stock === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
          data-item-id={product.id}
          data-item-name={product.name}
          data-item-price={product.price}
          data-item-url={"/products/" + product.id}
          data-item-description={product.description}
          data-item-image={product.image}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
        <p className="text-gray-600">{product.stock} left</p>
      </div>
    </div>
  );
};

export default ProductCard;
