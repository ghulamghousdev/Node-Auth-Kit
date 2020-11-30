const express = require('express')
require("./database/mongoose");
const app = express()



//Defining Port 
const port = process.env.Port || 3001;

//Routers 
const userRoute = require("./routes/user/user")

//To recognize incoming requests as json object.
app.use(express.json());
app.use(userRoute);

app.listen(port, () => {
  console.log(`Node-Auth-Kit listening at http://localhost:${port}`)
})