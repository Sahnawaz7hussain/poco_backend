const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { Authentication } = require("./middleware/authentications");
const { notesRouter } = require("./routes/notesRoute");
const { userRouter } = require("./routes/userRoute");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

app.use("/notes", Authentication, notesRouter);
app.use("/user", userRouter);

app.listen(PORT, async () => {
  try {
    console.log("connecting with db");
    await connection;
    console.log("connected with db");
    console.log(`server running at http://localhost:${PORT}`);
  } catch (err) {
    console.log({ message: "Unable to connect with db", err: err.message });
  }
});
