require("dotenv").config();

const express = require("express");
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRouter");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`SERVER is running on PORT no ${PORT}`);
});
