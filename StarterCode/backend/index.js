const express = require('express');

const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

//implement the CORS config
app.use(cors());

//products array
let products = [
  { id: 1, name: 'Product 1', description: 'description 1', price: 100, imageUrl: '' },
  { id: 2, name: 'Product 2', description: 'description 2', price: 200, imageUrl: '' },
  { id: 3, name: 'Product 3', description: 'description 3', price: 300, imageUrl: '' },
  { id: 4, name: 'Product 4', description: 'description 4', price: 150, imageUrl: '' },
  { id: 5, name: 'Product 5', description: 'description 5', price: 500, imageUrl: '' },
  { id: 6, name: 'Product 6', description: 'description 6', price: 50, imageUrl: '' },
];

//function to generate a url for getting a random image from picsum
const fetchImageUrl = () => {
  return `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`;
};

products.map((product) => {
  product.imageUrl = fetchImageUrl();
});

/*
 * 'status' field of product:
 * status = 1: Active. The product is not deleted and is considered available.
 * status = 0: Deleted. The product is marked as deleted and is unavailable.
 */
products.map((product) => {
  product.status = 1;
});

//implement the get api for getting products
app.get('/api/products', (req, res) => {
  ret = products.filter((product) => product.status === 1);
  res.status(200).json(ret);
});

//implement the delete api for deleting a product by Id
app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const deleteId = parseInt(id);

  let toDelete = products.find((product) => product.id === deleteId);

  if (toDelete) {
    toDelete.status = 0;
    restProduct = products.filter((product) => product.status === 1);

    res.status(200).json({
      message: `Product (id = ${id}) has been deleted...`,
      products: restProduct,
    });
  } else {
    // If the product with the requested id does not exist or is already deleted (status = 0), return an error message.
    res.status(404).json({
      message: `Product (id = ${id}) not found...`,
      data: products,
    });
  }
});

app.listen(PORT, (error) => {
  if (error) {
    console.error('Failed to run the server, check port.');
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
