-- always mark id as => SERIAL
-- Currency , grams , scientific cal use (VERY PRECISE)  => NUMERIC
-- Need to store a number , with a decimal and the decimal does'nt need 100% precies => DOUBLE PRECISION


--------------------------
Charcter Types

-- There is no performance bonus of below 4 of individual use any which suits

-- CHAR(5) , Fixed , Truncate if more , if less then insert spaces
SELECT ('sdfsdfds'::CHAR(5));
SELECT ('1'::CHAR(1)); -- You will find whitespaces

-- VARHCAR  , Anylength

-- VARCHAR(50) , Truncate if more that 50, if less no spaces will be aded
SELECT ('sdfsdfds'::CHAR(5));
SELECT ('1'::CHAR(1)); -- You will find whitespaces

-- TEXT , store any length of string
----------------------------------

Boolean Types
'true' , 'yes','on' , 1, 't', 'y' => TRUE
'false' , 'no' ,'off',0,'f','n' => FALSE
null => NULL -- we dont know ? either true or false
SELECT ('true'::BOOLEAN);

------------------------
 Date and Time Types

 SELECT ('NOV-20-1980'::DATE);
 SELECT ('NOV 20 1980'::DATE);
 SELECT ('November 20 1980'::DATE);

 --------------------
 WITHOUT TIMEZONE

 -- 01:23 AM => 01:23
 -- 05:23 PM => 17:23 
 -- 20:34 => 20:34

 SELECT('01:23'::TIME);
 SELECT('3:34:34 PM'::TIME); -- TIME is short for TIME WITHOUT TIME ZONE


WITH TIMEZONE

SELECT('NOV-20-1980 1:23 AM EST'::TIMESTAMP WITH TIME ZONE) 


 ---------------------------

-- INTERVAL
('NOV-20-1980 1:23 AM EST'::TIMESTAMP WITH TIME ZONE) 
-
('4 D'::INTERVAL);
