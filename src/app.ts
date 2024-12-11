import express, { Application } from "express";
import { AuthRoutes } from "./routes/Authroutes";

export const app: Application = express();
app.use(express.json());
app.use("/auth", AuthRoutes);
