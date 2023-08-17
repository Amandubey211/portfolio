import express from "express";
import DBConnect from "./Data_Base/DB.js";
import FormRouter from "./MVC_/Routes/FormRouter.js";
import cors from "cors"

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", FormRouter);

app.get("/", (req, res) => {
  res.send("hii aman");
});


DBConnect();
app.listen(5000, () => {
  console.log(`server connection successfull.`);
});
