const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
// const path = require("path")
require("dotenv").config();
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors(
  {
    origin: [process.env.FRONTEND_DEV, process.env.FRONTEND],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }
));

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));


if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {

  // app.use(express.static("../Frontend/build"));
  // const buildPath = (path.join(__dirname, "../Frontend/build"));
  // app.use(express.static(buildPath));
  app.get('(/*)?', (req, res) => {
    // res.sendFile(path.join(buildPath, "index.html"));
    res.redirect(process.env.FRONTEND)
  });
}

app.listen(port, () => {
  console.log(`DevNotes Backend listening at port ${port}`);
});
