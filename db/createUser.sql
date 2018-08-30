INSERT INTO users (auth_id, name, email)
VALUES (${sub},${name}, ${email})
RETURNING *;