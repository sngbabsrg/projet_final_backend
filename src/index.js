require('dotenv').config();
console.log("MONGODB_URI =", process.env.MONGODB_URI);
const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const path = require("path");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

const allowedOrigins = ['https://projet-final-frontend-tan.vercel.app'];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true); // autoriser les requêtes sans origine (ex: Postman)
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));


// automatically parse incoming JSON to an OBJECT
app.use(express.json());

// user routes
app.use(userRouter);

// task routes
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
  console.log("--------------------------");
});
