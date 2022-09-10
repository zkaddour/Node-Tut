# Node.js Tutorial

A beginner project with the objective of learning the basics of Node.js. I used the course provided by [The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU) however I do plan on changing the project quite a bit after I learn enough, I will of course detail the changes here.

## Side Notes

I installed `lodash` while following the course, but I doubt I will use it in the future. I should use it to learn how to remove unrequired dependencies.

I chose to create the database in a docker environment for personal preferences. If you wish to do the same you need to follow the following steps (I run windows):

- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Create and fill the `.env` file based on `.env.example`:

  - `MONGO_INITDB_ROOT_USERNAME`: is the admin username used to access the database.

  - `MONGO_INITDB_ROOT_PASSWORD`: is the admin password used to access the database.

- Run `docker run --name database -v /db:/data/db -p 6017:27017 --env-file ./.env mongo:latest` in the root directory to initiate the database container. Do this only on the first time you initialize the project. You can add `--it` to access the database shell directly or open a terminal through Docker Desktop.

- In the container shell run `mongosh` to access MongoDB database.

- You need to run `use admin` and `db.auth()` before creating a new user. Remember to pass the root username and password in quotes inside `db.auth()`.

- Create a new user with access to all databases using the command `db.createUser({ user: "firstUser", pwd: "Password123", roles: [ "readWriteAnyDatabase" ] });`.

- To create a new database you need to use the command `use` as there is no create database command. In this case we will name the new database as `nodejs` so we run `use nodejs`.

- Running `use nodejs` does not fully register the new database and it will not be visible in the list outputed by running `show dbs`. To save the database we can create an empty collection by running `db.createCollection("blogs")`. After running `show dbs` you will notice that `nodejs` is now present in the list.
