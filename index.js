import express, { request, response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import httpResponseMessage from "./constants/httpResponseMessage.js";

import roomsRoutes from "./routes/roomsRoutes.js";
import { startSequelize } from "./utils/startSequelize.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use("/rooms", roomsRoutes);


app.use((err, request, response, next) => {
    if (response.headersSent) return next(err);
    response.status(500).json({
        message: httpResponseMessage[response.statusCode],
    });
    console.log(err);
});

startSequelize();

app.listen(port, () => {
    console.log(`Server is running at port http://localhost:${port}`);
});





