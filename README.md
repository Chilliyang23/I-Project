### Simple Web App ###
1. How to run this app?
    ```
    npm init -y           # to create a package.json
    npm install express   # install Express
    node app.js           # run the app
    ```
2. Build containerized app
    ```
    docker build -t my-api:01 .
    docker run --name node-app -p 3000:3000 my-api
    ```
