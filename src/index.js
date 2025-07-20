const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const path = require("path");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

app.use(cors());
//! automatically parse incoming JSON to an OBJECT
app.use(express.json());
//*=======================================
//! user routes
app.use(userRouter);
//*=======================================
//! task routes
app.use(taskRouter);
//*=======================================



app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
  console.log("--------------------------");
});
