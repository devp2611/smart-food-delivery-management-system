use("smart_food_nosql");

// Q1 — Simple Query
db.customers.find({
  account_type: "PREMIUM"
});

// Q2 — Complex Query
db.orders.find({
  status: "DELIVERED",
  total_amount: { $gt: 20 },
  "payment.method": "CARD"
});

// Q3 — Aggregate Query
db.orders.aggregate([
  { $match: { status: "DELIVERED" } },
  {
    $group: {
      _id: "$customer_id",
      total_spent: { $sum: "$total_amount" }
    }
  },
  {
    $lookup: {
      from: "customers",
      localField: "_id",
      foreignField: "customer_id",
      as: "customer_info"
    }
  },
  { $unwind: "$customer_info" },
  {
    $project: {
      _id: 0,
      customer_id: "$_id",
      customer_name: "$customer_info.name",
      total_spent: 1
    }
  },
  { $sort: { total_spent: -1 } },
  { $limit: 5 }
]);
