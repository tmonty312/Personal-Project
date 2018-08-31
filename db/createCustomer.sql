INSERT INTO customer ( name, email, phone, address, stripeId)
VALUES (${name},${email},${phone},${address}, ${stripeId})
RETURNING *;