import React, { useEffect, useState } from 'react';
import Container from './Container';
import Error from './Error';
import axios from 'axios';

const ProductList = () => {
  const BASEURL = 'http://localhost';
  const PORT = '3002';

  //   let test = [
  //     { id: 1, name: 'Product 1', description: 'description 1', price: 100, imageUrl: 'https://picsum.photos/200/200?random=1' },
  //     { id: 2, name: 'Product 2', description: 'description 2', price: 200, imageUrl: 'https://picsum.photos/200/200?random=2' },
  //     { id: 3, name: 'Product 3', description: 'description 3', price: 300, imageUrl: 'https://picsum.photos/200/200?random=3' },
  //     { id: 4, name: 'Product 4', description: 'description 4', price: 150, imageUrl: 'https://picsum.photos/200/200?random=4' },
  //     { id: 5, name: 'Product 5', description: 'description 5', price: 500, imageUrl: 'https://picsum.photos/200/200?random=5' },
  //     { id: 6, name: 'Product 6', description: 'description 6', price: 50, imageUrl: 'https://picsum.photos/200/200?random=6' },
  // ];

  const [products, setProducts] = useState([]);
  const [statusCode, setStatusCode] = useState(null);

  //implement the get products function
  const fetchProducts = () => {
    axios
      .get(`${BASEURL}:${PORT}/api/products`)
      .then((result) => {
        const statusCode = result.status;
        setStatusCode(statusCode);
        setProducts(result.data);
      })
      .catch((error) => {
        if (error.code === 'ERR_NETWORK') {
          setStatusCode(0);
        }
      });
  };

  //implement the delete function
  const handleDelete = (id) => {
    axios
      .delete(`${BASEURL}:${PORT}/api/products/${id}`)
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    // If an error is raised, display error information to the user instead of the product card list.
    <div>
      {statusCode === 200 ? (
        <div className="container">
          <Container clickDelete={handleDelete}>{products}</Container>
        </div>
      ) : (
        <Error statusCode={statusCode} />
      )}
    </div>
  );
};

export default ProductList;
