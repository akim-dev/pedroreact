import React from "react";

function RenderingList() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      cat : 'fruits',
      isfruit : true,
      image: "https://via.placeholder.com/150x150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      cat : 'fruits',
      isfruit : true,
      image: "https://fakeimg.pl/250x100/ff0000/",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      cat : 'home',
      isfruit : false,
      image: "https://via.placeholder.com/150x150",
    },
    {
        id: 4,
        name: "Product 4",
        price: 400,
        cat : 'garden',
        isfruit : false,
        image: "https://via.placeholder.com/150x150",
      },
    
  ];

  return (
    <div>
      <ul>
        {products.map((product) => (
          <div>
            <li key={product.id}
            style ={{ color :product.isfruit ? 'red' : 'green' }}
            >{product.name}</li>
            <li>{product.price}</li>
            <li>{product.image}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default RenderingList;
