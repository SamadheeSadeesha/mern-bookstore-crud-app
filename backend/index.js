import express from "express";
import { PORT, MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body (allows express to use json body)
app.use(express.json());

// Middleware for handling CORS Policy
// Option 1: Allow all origins with default of cors(*)
app.use(cors());

// Option 2: Allow custom origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack Tutorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
