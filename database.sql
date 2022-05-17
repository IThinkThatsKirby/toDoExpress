CREATE TABLE "users" (
	"user_id" serial NOT NULL,
	"user_name" varchar(18) NOT NULL,
	"role_id" integer NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "chores" (
	"chore_id" serial NOT NULL,
	"chore_name" varchar(22) NOT NULL,
	"chore_description" varchar(255) NOT NULL,
	"user_id" integer(255) NOT NULL,
	CONSTRAINT "chores_pk" PRIMARY KEY ("chore_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "rewards" (
	"reward_id" serial NOT NULL,
	"reward_poki_id" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "rewards_pk" PRIMARY KEY ("reward_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "user_rewards" (
	"user_id" integer NOT NULL,
	"reward_id" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "user_chores" (
	"user_id" integer NOT NULL,
	"chore_id" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "user_groups" (
	"user_id" integer NOT NULL,
	"group_id" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "user_roles" (
	"role_id" serial NOT NULL UNIQUE,
	"role_name" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "user_roles_pk" PRIMARY KEY ("role_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "groups" (
	"group_id" serial NOT NULL UNIQUE,
	"group_name" varchar(20) NOT NULL,
	"user_id" integer NOT NULL,
	CONSTRAINT "groups_pk" PRIMARY KEY ("group_id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("role_id") REFERENCES "user_roles"("role_id");

ALTER TABLE "chores" ADD CONSTRAINT "chores_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");


ALTER TABLE "user_rewards" ADD CONSTRAINT "user_rewards_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "user_rewards" ADD CONSTRAINT "user_rewards_fk1" FOREIGN KEY ("reward_id") REFERENCES "rewards"("reward_id");

ALTER TABLE "user_chores" ADD CONSTRAINT "user_chores_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "user_chores" ADD CONSTRAINT "user_chores_fk1" FOREIGN KEY ("chore_id") REFERENCES "chores"("chore_id");

ALTER TABLE "user_groups" ADD CONSTRAINT "user_groups_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "user_groups" ADD CONSTRAINT "user_groups_fk1" FOREIGN KEY ("group_id") REFERENCES "groups"("group_id");


ALTER TABLE "groups" ADD CONSTRAINT "groups_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");







-- --creating chores table
-- CREATE TABLE chores
--    (chore_id SERIAL PRIMARY KEY,
--     chore_name VARCHAR(255) NOT NULL,
--     chore_description VARCHAR(255),
--     completed BOOLEAN NOT NULL,
--     user_id INTEGER,
--     confirmed BOOLEAN NOT NULL);

-- -- creating pokemon table
-- CREATE TABLE pokemon
--    (pokemon_id NUMERIC, 
--     pokemon_name VARCHAR(255) NOT NULL,
--     description VARCHAR(255) NOT NULL);
-- -- --creating users table
-- CREATE TABLE users
--    (user_id SERIAL PRIMARY KEY,
--     username VARCHAR(255) NOT NULL);

-- ALTER TABLE pokemon
--    ADD CONSTRAINT UNIQUE_NAME
--     UNIQUE (pokemon_name);

-- ALTER TABLE chores
--     ADD CONSTRAINT foreign_key_user
--     FOREIGN KEY (user_id)
--     REFERENCES users(user_id);
