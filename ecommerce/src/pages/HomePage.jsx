import React from "react";
import ProductCard from "../components/product-card";

const HomePage = () => {
  const ProductSection = ({ title, products }) => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            price={product.price}
            name={product.name}
          />
        ))}
      </div>
    </div>
  );

  const saleProducts = [
    {
      imageUrl: "https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg",
      price: 2.99,
      name: "Kurkure 50g",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg",
      price: 2.99,
      name: "Kurkure 50g",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg",
      price: 2.99,
      name: "Kurkure 50g",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg",
      price: 2.99,
      name: "Kurkure 50g",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg",
      price: 2.99,
      name: "Kurkure 50g",
    },
    // Add more product objects for sale
  ];

  const newProducts = [
    {
      imageUrl: "https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg",
      price: 2.99,
      name: "Kurkure 50g",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg",
      price: 2.99,
      name: "Kurkure 50g",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg",
      price: 2.99,
      name: "Kurkure 50g",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg",
      price: 2.99,
      name: "Kurkure 50g",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg",
      price: 2.99,
      name: "Kurkure 50g",
    },
    // Add more product objects for new arrivals
  ];

  return (
    <div className="container mx-auto p-4">
      <ProductSection title="On Sale" products={saleProducts} />
      <ProductSection title="New Arrivals" products={newProducts} />
    </div>
  );
};

export default HomePage;
