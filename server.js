import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/index.js";
import dbConnect from "./dbConfig/dbConnection.js";

dotenv.config();

const port = process.env.PORT;

// configration
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));
app.set("view engine", "ejs");


// Router
app.use("/", router);

dbConnect();
app.listen(port, () => {
  console.log(`Server is Runnung on http://localhost:${port}`);
});
