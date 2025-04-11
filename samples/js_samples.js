const axios = require("axios");

const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.shopeasy.dev/v1";

const headers = {
  Authorization: `Bearer ${API_KEY}`
};

// Get all orders
axios.get(`${BASE_URL}/orders`, { headers })
  .then(res => console.log("Orders:", res.data))
  .catch(err => console.error(err));

// Create a new order
const newOrder = {
  customer_id: "C2002",
  items: [
    { product_id: "P1001", quantity: 1 },
    { product_id: "P1002", quantity: 2 }
  ]
};

axios.post(`${BASE_URL}/orders`, newOrder, { headers })
  .then(res => console.log("New Order:", res.data))
  .catch(err => console.error(err));
