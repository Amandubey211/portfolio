import express from "express";
import DBConnect from "./Data_Base/DB.js";
import FormRouter from "./MVC_/Routes/FormRouter.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "./Client/build")));

app.use("/api", FormRouter);

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./Client/build/index.html"));
});

DBConnect();
app.listen(process.env.PORT, () => {
  console.log(`server connection successfull.`);
});
