import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import colors from "colors";
import UserRoutes from "./routes/User.js";
dotenv.config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user/", UserRoutes);

// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello developers",
  });
});

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then((res) => console.log("Connected to MONGODB".bgMagenta.white))
    .catch((err) => console.log(`MONGODB Error ${err}`.bgRed.white));
};
const startServer = async () => {
  try {
    connectDB();
    app.listen(process.env.PORT, () =>
      console.log("Server running at PORT 8080".bgYellow.black)
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
