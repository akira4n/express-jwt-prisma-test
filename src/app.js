require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT || 3000;

const authRoute = require("./routes/auth.routes");
const postRoute = require("./routes/post.routes");

app.use(express.json());

// routes
app.use("/api", authRoute);
app.use("/api", postRoute);

// API check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is up",
  });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Not found",
  });
});

// global error handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.statusCode ? err.message : "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
