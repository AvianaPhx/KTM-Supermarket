import { Card, Button } from 'flowbite-react';
import { useState } from 'react';

const ProductCard = ({ imageUrl, price, name }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    //This code is of product card.
    <Card className="w-56 border">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4 text-center">
        <p className="text-lg font-bold">${price}</p>
        <p className="text-gray-500">{name}</p>
        <div className="flex items-center justify-center space-x-2 mt-2">
          <button className='px-5 py-5 background-circle' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button> 
          <span>{quantity}</span>
          <button className='px-5 py-5' onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <Button color="light" className="mt-4 w-full">Add to Cart</Button>
      </div>
    </Card>
  );
};

export default ProductCard;
