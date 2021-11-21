-- Author Siddharth Kumar Yadav

-- ADDING PRIMARY KEY FOR A TABLE

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(50)
  );

INSERT INTO users(
  username
)
VALUES('sky_10'),
('sky_7'),
 ('abc');

 SELECT * FROM users

 ----------------------------------------------


 CREATE TABLE photos(
  id SERIAL PRIMARY KEY,
  url VARCHAR(200),
  user_id INTEGER REFERENCES users(id)
);


 INSERT INTO photos(url,user_id)
VALUES(
  'https://33.jpg',4);


---------------------------------------------------------------------
SELECT * FROM photos where user_id=4;


-- OR


select * FROM photos
JOIN users ON users.id=photos.user_id;

-- Two different tables 
--------------------------------------------------------------------

