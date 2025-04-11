# E-commerce Orders API Reference

API endpoints to manage customer orders, view order status, and update shipping details.

## Endpoints

- **GET** `/orders`
- **GET** `/orders/{order_id}`
- **POST** `/orders`
- **PUT** `/orders/{order_id}/shipping`

---

### 📋 GET /orders

Returns a list of all orders.

**Example request:**
GET /orders
Authorization: Bearer YOUR_API_KEY

**Response:**

```json
[
  {
    "order_id": "123456",
    "status": "processing",
    "total": 149.99,
    "currency": "USD",
    "created_at": "2025-04-01T15:32:00Z"
  }
]

### 🔍 GET /orders/{order_id}
Get details of a specific order.

**Example request:**

GET /orders/123456
Authorization: Bearer YOUR_API_KEY

**Example response:**

```json
{
  "order_id": "123456",
  "status": "processing",
  "total": 149.99,
  "currency": "USD",
  "created_at": "2025-04-01T15:32:00Z",
  "items": [
    {
      "product_id": "789012",
      "quantity": 2,
      "price": 49.99,
      "name": "Product 1"
    }
  ],
  "shipping_address": {
    "name": "John Doe",
    "address": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345",
    "country": "USA"
  }
}

### ➕ POST /orders
Creates a new order.

**Example request:**
POST /orders
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

```json
{
  "items": [
    {
      "product_id": "789012",
      "quantity": 2,
      "price": 49.99
    }
  ],
  "shipping_address": {
    "name": "John Doe",
    "address": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345",
    "country": "USA"
  }
}
 
**Response:**

```json
{
  "order_id": "123456",
  "status": "processing",
  "total": 149.99,
  "currency": "USD",
  "created_at": "2025-04-01T15:32:00Z"
}

### 📝 PUT /orders/{order_id}/shipping
Updates the shipping details of an order.

**Example request:**
PUT /orders/123456/shipping
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

```json
{
  "name": "John Doe",
  "address": "123 Main St",
  "city": "Anytown",
  "state": "CA",
  "zip": "12345",
  "country": "USA"
}

**Response:**

```json
{
  "order_id": "123456",
  "status": "processing",
  "total": 149.99,
  "currency": "USD",
  "created_at": "2025-04-01T15:32:00Z"
}
