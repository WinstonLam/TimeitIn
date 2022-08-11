import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import getUsers from "./routes/users.js";
import getAdmin from "./routes/admin.js";
import getHours from "./routes/hours.js";

const app = express();

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

app.use("/admin", getAdmin);
app.use("/users", getUsers);
app.use("/hours", getHours);

const CONNECTION_URL =
  "mongodb+srv://winston:L5JiMIxOUpMNuWFR@timitin.8kovydu.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
