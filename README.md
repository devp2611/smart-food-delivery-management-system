# 🍽️ Smart Food Delivery & Marketplace Management System

![Python](https://img.shields.io/badge/Python-3.10-blue)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange)
![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-green)
![Status](https://img.shields.io/badge/Project-Completed-success)

---

## 📌 Overview
This project presents a data-driven food delivery management system designed to simulate real-world platforms like Uber Eats or DoorDash.

The system integrates:
- Relational Database (MySQL)
- NoSQL Database (MongoDB)
- Python-based analytics for insights and visualization

---

## 🚀 Key Highlights
- Designed an end-to-end database system for food delivery operations
- Implemented MySQL schema with 3NF normalization
- Developed analytical SQL queries for business insights
- Built a Python analytics pipeline using Pandas and Matplotlib
- Implemented MongoDB NoSQL model with aggregation queries
- Generated visual dashboards for decision-making

---

## 🧱 System Architecture

### 🔹 Relational Model (MySQL)
Includes:
- Customers
- Restaurants
- Menu & Menu Items
- Orders & Order Items
- Payments
- Drivers & Deliveries
- Promotions & Reviews

Ensures:
- Data integrity
- Reduced redundancy
- Efficient querying

---

### 🔹 NoSQL Model (MongoDB)
- Collections: customers, restaurants, drivers, orders
- Embedded documents for:
  - order items
  - payment
  - delivery

Advantages:
- Flexible schema
- Reduced joins
- Faster nested queries

---

## 📊 Analytics & Visualizations


### Orders per Restaurant
![Orders](charts/01_orders_per_restaurant.png)

**Insight:** This chart compares total order volume across restaurants and helps identify high-demand partners.

### Top Selling Items
![Items](charts/02_top_selling_items.png)

**Insight:** This chart highlights the most frequently ordered menu items, which can support menu optimization and inventory planning.

### Revenue Distribution
![Revenue](charts/03_revenue_distribution.png)

**Insight:** This visualization shows how revenue is distributed across restaurants and helps identify the strongest revenue contributors.

### Daily Orders Trend
![Trend](charts/04_daily_orders_trend.png)

**Insight:** This chart tracks daily order activity and helps detect demand patterns and peak ordering periods.

### Payment Methods
![Payments](charts/05_payment_methods_pastel.png)

**Insight:** This chart shows customer payment preferences and can support checkout strategy and digital payment promotion.

### Ratings vs Orders
![Ratings](charts/06_ratings_scatter.png)

**Insight:** This visualization compares restaurant ratings and helps evaluate service quality across partners.

---

## 📊 Business Insights
- Identified top-performing restaurants
- Analyzed payment behavior
- Detected peak order trends
- Evaluated ratings vs performance
- Compared revenue distribution

---

## 🔄 System Workflow
1. Customer places order
2. Order linked to restaurant
3. Payment processed
4. Driver assigned
5. Delivery completed
6. Feedback recorded

---

## 📂 Project Structure


```text
smart-food-delivery-management-system/
│
├── app/
├── sql/
├── nosql/
├── diagrams/
├── charts/
├── docs/
│
├── requirements.txt
└── README.md
```
---

## ▶️ How It Works

Running the application will:

- connect to the MySQL database
- execute analytical SQL queries
- generate visualization charts
- save all output charts in the `charts/` folder

---

## ⚙️ Setup Instructions

### 1. Clone Repository
git clone https://github.com/devp2611/smart-food-delivery-management-system.git

### 2. Install Requirements
pip install -r requirements.txt

### 3. Setup Database
Run:
sql/schema_and_seed.sql

### 4. Configure DB
Open:
app/db_config.py

Update:
password="your_password_here"

### 5. Run Project
python app/app.py

---

## Future Improvements
- Web dashboard (Flask/Streamlit)
- Real-time tracking
- API integration
- ML-based predictions

---

## Author
Dev Patel
