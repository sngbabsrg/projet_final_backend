const mongoose = require("mongoose");

const connectionURL = process.env.MONGODB_URI;

console.log("MongoDB URI:", connectionURL);

if (!connectionURL) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

mongoose.connect(connectionURL).then(() => {
  console.log("MongoDB connected");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});
