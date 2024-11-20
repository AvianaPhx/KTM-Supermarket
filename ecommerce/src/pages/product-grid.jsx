import ProductCard from '../components/product-card.jsx';

const ProductGrid = () => {
    //images of products
  const products = [
    { imageUrl: "https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg", price: 2.99, name: 'Kurkure 50g' },
    { imageUrl: 'https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg', price: 2.99, name: 'Kurkure 50g' },
    { imageUrl: 'https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg', price: 2.99, name: 'Kurkure 50g' },
    { imageUrl: 'https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg', price: 2.99, name: 'Kurkure 50g' },
    { imageUrl: "https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg", price: 2.99, name: 'Kurkure 50g' },
    { imageUrl: 'https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg', price: 2.99, name: 'Kurkure 50g' },
    { imageUrl: 'https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg', price: 2.99, name: 'Kurkure 50g' },
    { imageUrl: 'https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg', price: 2.99, name: 'Kurkure 50g' },
    { imageUrl: "https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg", price: 2.99, name: 'Kurkure 50g' },
    { imageUrl: 'https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg', price: 2.99, name: 'Kurkure 50g' },
    { imageUrl: 'https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg', price: 2.99, name: 'Kurkure 50g' },
    { imageUrl: 'https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg', price: 2.99, name: 'Kurkure 50g' },
    { imageUrl: "https://m.media-amazon.com/images/I/71LyKlizpuL._SL1500_.jpg", price: 2.99, name: 'Kurkure 50g' }


    // Add more product objects here
  ];

  return (//options for availabilty/price/brands (filters)
    <div className="container mx-auto p-4">
      <div className="text-left mb-4">
        <h2 className="text-xl font-semibold">Products</h2>
        <div className="flex space-x-2 mt-2">
          <select className="border rounded px-2 py-1">
            <option>Availability</option> 
          </select>
          <select className="border rounded px-2 py-1">
            <option>Price</option>
          </select>
          <select className="border rounded px-2 py-1">
            <option>Brands</option>
          </select>
        </div>
      </div>
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
};

export default ProductGrid;
