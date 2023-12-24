// src/app.ts
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();
const PORT = 8080;

// In-memory data store
let products: Product[] = [
  { id: 1, name: 'Product 1', description: 'Description 1' },
  { id: 2, name: 'Product 2', description: 'Description 2' },
];

interface Product {
  id: number;
  name: string;
  description: string;
}

app.use(bodyParser.json());

// Get all products
app.get('/api/product', (req: Request, res: Response) => {
  res.json(products);
});

// Get a specific product by ID
app.get('/api/product/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Create a new product
app.post('/api/product', (req: Request, res: Response) => {
  const newProduct: Product = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update a specific product by ID
app.put('/api/product/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const updatedProduct: Product = req.body;

  const index = products.findIndex((p) => p.id === productId);

  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Delete a specific product by ID
app.delete('/api/product/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  products = products.filter((p) => p.id !== productId);
  res.json({ message: 'Product deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
