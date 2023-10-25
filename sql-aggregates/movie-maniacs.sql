SELECT "firstName",
       "lastName",
       sum("amount") as "totalAmount"
  FROM "customers"
  JOIN "payments" USING ("customerId")
  GROUP BY "firstName", "lastName"
  ORDER BY "totalAmount" DESC;
