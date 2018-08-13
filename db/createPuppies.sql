INSERT INTO puppies (id, breed, description, price, image)
VALUES (${id},${breed},${description},${price},${image})
RETURNING *;