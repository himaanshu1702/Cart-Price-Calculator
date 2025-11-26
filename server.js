const express = require('express');
const app = express();

app.use(express.json());

// Add this welcome route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Cart Calculator API!",
    endpoint: "POST /cart/total",
    example: {
      items: [
        { name: "Pen", price: 10, qty: 3 },
        { name: "Notebook", price: 40, qty: 2 }
      ]
    }
  });
});

app.post('/cart/total', (req, res) => {
  const { items } = req.body;
  
  let total = 0;
  for (let item of items) {
    total += item.price * item.qty;
  }
  
  res.json({ total });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Cart Calculator API running on http://localhost:${PORT}`);
});