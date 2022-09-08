# Node.js Tutorial

A beginner project with the objective of learning the basics of Node.js. I used the course provided by [The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU) however I do plan on changing the project quite a bit after I learn enough, I will of course detail the changes here.

## Side Notes

I installed `lodash` while following the course, but I doubt I will use it in the future. I should use it to learn how to remove unrequired dependencies.

I chose to create the database in a docker environment for personal preferences. If you wish to do the same you need to follow the following steps (I run windows):

- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Create and fill the `.env` file based on `.env.example`:

  - `MONGODB_USERNAME`: is the admin username used to access the database.

  - `MONGODB_PASSWORD`: is the admin password used to access the database.

  - `MONGODB_LINK`: is the link to the data base and it follows the form of: `mongodb://MONGODB_USERNAME:MONGODB_PASSWORD@mongo:27017/`

  - `MONGOE_USERNAME`: is the username used to access mongo-express

  - `MONGOE_PASSWORD`: is the passwprd used to access mongo-express

- Run `docker-compose -f stack.yml up` in the root directory to initiate the database container. Do this only on the first time you initialize the project.

- Use the Docker Desktop interface to start the container when working on the project.
