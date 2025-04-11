import requests

API_KEY = "YOUR_API_KEY"
BASE_URL = "https://api.shopeasy.dev/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}"
}

# Get all orders
response = requests.get(f"{BASE_URL}/orders", headers=headers)
print("Orders:", response.json())

# Create a new order
new_order = {
    "customer_id": "C2002",
    "items": [
        {"product_id": "P1001", "quantity": 1},
        {"product_id": "P1002", "quantity": 2}
    ]
}
response = requests.post(f"{BASE_URL}/orders", json=new_order, headers=headers)
print("New Order:", response.json())
