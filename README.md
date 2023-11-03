# real-time-messenger
real time message sharing app built using: React, PostgreSQL, express , socket.io, Redis, chakra-UI, Docker.

# Features
- User login and register.
- Add friend functionality.
- Authentication and authorisation using expression session cookie.
- Real time communication using redis.
- Spam protection: login/register rate limitation using redis.
- Light/dark mode and responsive design.

https://github.com/modakverma/real-time-messenger/assets/90524818/c1dfb2d2-c461-46ab-af1f-b1def035d0d2

# Project setup
- Clone the repository
- "cd" into the repository and run: npm install
- Have a Redis instance listening on localhost:6379 using a docker image
"$ docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest"
- Have a PostreSQL db running and provide the following:
- DATABASE_NAME = messenger
- DATABASE_HOST = localhost
- DATABASE_USER = your_db_username
- DATABASE_PASSWORD = your_db_password
- DATABASE_PORT = 5432
- COOKIE_SECRET = your_custom_secret
- Initialize the database with the queries found in server/database.sql
- Note: all environment variables must be defined in a file named .env
- Run npm run dev:server and npm start:client
