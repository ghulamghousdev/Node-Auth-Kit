# Node-Auth-Kit

It is a starter boilerplate for node applications with ES6 support and authentication which includes local email and password authentication.

## Technologies Used

- MongoDB
- Node.js
- Express.js

## Prerequisits

Following are the prerequisits to run this project on your machine. If you don't have these
prerequisits installed on your computer, run the following commands on your machine.

- **Git**
  You can install it from this [link.](https://git-scm.com/download/win)

- **Visual Studio Code**
  You can install it from the following source by clicking on this [link.](https://code.visualstudio.com/download)

- **MongoDB**
  There are two ways to install mongodb locally on your machine.

  1. By downloading the .msi file, you simply have to run it on your machine and install it
     on the following location on your

  ```
  path = c/Users/{You user name}/.
  ```

  [Click here to download.](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.0-signed.msi)

  2. By downloading the .zip file, you have to unzip the file in the location provided by the path

  ```
  path = /c/Users/{You user name}/.
  ```

  And create a mongodb_data folder in the same directory. [Click here to download it](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.0.zip)

- **Node:**
  To download and install the node on your machine [click here.](https://nodejs.org/en/download/)

- **Node Package Manager:**
  You can install node package manager by running the following command on power shell.
  ```
  npm install npm@latest -g
  ```

## How you can get started?

1. ## Clone the Repository
    ```
        git clone https://github.com/ghulamghousdev/Node-Auth-Kit.git
    ```

2. ## Installation
- To install all the project dependencies used for this project one needs to run the following command.
    ```
        npm install
    ```

3. ## Add MongoDB URI
- You need to put MongoDB URI in the mongoDB config file which is in the directory ```./database/mongoose.js```. 
- Place the URI in double quotes in mongoose.connect(). You can either use MongoDB Atlas or Local mongodb.
- If you are using local mongodb follow the following steps:<br>
    - Run Database Server<br> 
    You have to set the database path in your package.json file. You need to replace the mongod script in scripts in package.json with the following line.

        ```
        "mongod": "c:/Users/{account username}/mongodb/bin/mongod.exe --dbpath c:/Users/{account username}/mongodb-data"
    
        For example if your account username is Ghous then the script will be like:
        "mongod": "c:/Users/Ghous/mongodb/bin/mongod.exe --dbpath c:/Users/Ghous/mongodb-data"
        ```

        After doing this you need to open a new terminal and execute the following command.

        ```
        npm run mongod
        ```

4. ## Development Mode
- After installing all the dependencies and setting the MongoDB URI, run the following command to start your server.
    ```
    npm run dev
    ``` 

## Features
- You can Signup a user using email and password.
- You can Login a user using email and password.

## Found an Issue or any suggestions
Create issues [here](https://github.com/ghulamghousdev/Node-Auth-Kit/issues/new).


