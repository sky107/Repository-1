-- Author Siddharth Kumar Yadav

--- creating a table

CREATE TABLE cities(
	name VARCHAR(50),
	country VARCHAR(50),
	population INTEGER,
	area INTEGER
);

--- here CREATE TABLE is keyword : => tell that we want to do someting always in CAPS
--- here cities is identifier : => tell what thing to act upon always in lowercase
--- inside () means columns and type separated by commas
-- VARCHAR means variable length character  // DATATYPES
-- integer limits = -(2^31-1) to (2^31-1) // 2 billion

--- inserting a table
INSERT INTO cities(name,country,population,area)
VALUES ('Tokyo','Japan',3234242,2324234);
-- we can jumble the order but match as same order as former & later


-- insterting multiple values at a time
INSERT INTO cities(name,country,population,area)
VALUES 
('Delhi','India',3242,34234),
('Boston','US',343434,234),
('Hyderabas','India',343242,342);


-- FETCHING DATA
SELECT * from cities

------------------------------------------------------------------------
-- TRANSFORMING DATA BEFORE DISPLAYING

SELECT name,population/area AS DENSITY FROM cities;

-- ^ for exponent , I/ => squarroot , @ => absolute value for transformation


------------------------------------------------------

-- STRING OPERATORS AND FUNCTIONS

-- || (pipe operator) => JOIN TWO STRINGS
-- CONCAT() =>JOIN TWO STRINGS


SELECT name ||', ' ||  country AS location FROM cities
SELECT CONCAT(name,' , ',country) AS location FROM cities;



-- FUNCTIONS

SELECT
  CONCAT(UPPER(name), ' ,', upper(country)) AS location
from
  cities;

--OR

SELECT
  UPPER(CONCAT(name, ' ,', country)) AS location
from
  cities;

---------------------------------------------------



