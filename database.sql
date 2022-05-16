--how to access heroku database with psql !!!
--password left blank and entered when prompted in command line
--This can easily be used to manipulate data within the command line

----------
---------- psql --host=ec2-52-4-104-184.compute-1.amazonaws.com --port=5432 --username=ibslnpveydtyzi --password --dbname=d2qi6dve9dt6oc
----------

--creating chores table
CREATE TABLE chores
   (chore_id SERIAL PRIMARY KEY,
    chore_name VARCHAR(255) NOT NULL,
    chore_description VARCHAR(255),
    completed BOOLEAN NOT NULL,
    user_id INTEGER,
    confirmed BOOLEAN NOT NULL);

-- creating pokemon table
CREATE TABLE pokemon
   (pokemon_id NUMERIC, 
    pokemon_name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL);
-- --creating users table
CREATE TABLE users
   (user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL);

ALTER TABLE pokemon
   ADD CONSTRAINT UNIQUE_NAME
    UNIQUE (pokemon_name);

ALTER TABLE chores
    ADD CONSTRAINT foreign_key_user
    FOREIGN KEY (user_id)
    REFERENCES users(user_id);
