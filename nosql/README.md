# NoSQL Implementation (MongoDB)

## Overview
This project includes a NoSQL implementation of the Smart Food Delivery system using MongoDB.

The relational database was converted into a document-based model to demonstrate schema flexibility and aggregation capabilities.

---

## Collections Used
- customers
- restaurants
- drivers
- orders

The `orders` collection uses embedded documents for:
- items
- payment
- delivery

---

## Queries Implemented

### 1. Simple Query
Find premium customers:
db.customers.find({ account_type: "PREMIUM" })


### 2. Complex Query
Find delivered orders with amount > 20 using CARD:
db.orders.find({
status: "DELIVERED",
total_amount: { $gt: 20 },
"payment.method": "CARD"
})


### 3. Aggregation Query
Top customers by spending:
- Groups orders
- Calculates total spending
- Joins customer details
- Sorts results

---

## Key Learnings
- NoSQL allows flexible schema design
- Embedded documents reduce joins
- Aggregation pipeline enables powerful analytics

---

## Comparison with SQL
| Feature | SQL | MongoDB |
|------|-----|--------|
| Schema | Fixed | Flexible |
| Joins | Required | Avoided |
| Data Storage | Tables | Documents |
| Performance | Good | Faster for nested data |
