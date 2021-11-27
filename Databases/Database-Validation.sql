-- Row Level Validation


CREATE TABLE products(
id SERIAL PRIMARY KEY,
name VARCHAR(50),
department VARCHAR(50),
price INTEGER,
weight INTEGER
)



ALTER TABLE products
ALTER COLUMN price
SET NOT NULL



ALTER TABLE products
ALTER COLUMN price
SET DEFAULT 999




