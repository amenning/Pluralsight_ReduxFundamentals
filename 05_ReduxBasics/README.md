This project has been created to work with Docker.  In order to use this with docker follow these steps:

* docker build -t my-nodejs-app .
* docker run -p 3000:3000 -d my-nodejs-app

You can check on the status and stop it using:

* docker ps
* docker logs <container ID>
* docker stop <container ID>

You can load the page by going to localhost:3000
