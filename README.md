# Node.js Tutorial

A beginner project with the objective of learning the basics of [Node.js](https://nodejs.org/en/). I used the course provided by [The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU). I like this course as it's designed to cover most of the basics needed to create a basic website using Node.js including how to start a project, installing modules, Express, MongoDB and much more.

The course uses [MongoDB Atlas](https://www.mongodb.com/atlas/database) to host the database, but I opted to use [Docker](https://www.docker.com/) instead for personal preference.

## Installation

If you wish to run this project locally on your machine, here is a beginner guide:

1. Install Node.js on your system (I installed it locally on WSL) and git.

2. If you wish to use MongoDB Atlas you can skip step 4 and look up how to setup and use MongoDB Atlas in your project.

3. Clone this project into a local directory.

4. Install Docker on your system and setup the database:

    4.1. Create your `.env.db` file based on `.env.db.example` by specifying the admin credential you wish to use for your database.

    4.2. Create the database based on the [mongo image](https://hub.docker.com/_/mongo) by running the `docker run --name database -v $(pwd)/db:/data/db -p 6017:27017 --env-file ./.env.db mongo:latest` in the directory you cloned the repo into.

    4.3. Open the interactive shell of the Docker container and open the mongo shell by running `mongosh`.

    4.4. You need to run `use admin` and `db.auth()` before creating a new user. Remember to pass the root username and password in quotes such as `db.auth("user", "password")`.

    4.5. Create a new user with access to all databases using the command `db.createUser({ user: "firstUser", pwd: "Password123", roles: [ "readWriteAnyDatabase" ] });`.

    4.6. To create a new database you need to use the command `use` as there is no create database command. In this case we will name the new database as `nodejs` so we run `use nodejs`.

    4.7. Running `use nodejs` does not fully register the new database and it will not be visible in the list outputed by running `show dbs`. To save the database we can create an empty collection by running `db.createCollection("blogs")`. After running `show dbs` you will notice that `nodejs` is now present in the list.

5. Run `npm install` in the project directory to install the dependencies.

6. Run `node app` in the project directory and visit [localhost:3000](localhost:3000) to view the website.

## Side Notes

I installed `lodash` while following the course, but I doubt I will use it in the future. I should use it to learn how to remove unrequired dependencies.

I decided against using `mongo-express` as I had way too many errors, but since I seem to have a stable connection and volume sharing I might attempt it again in the future.

Feel free to give feedback concerning the project as it will help me improve in the future.
