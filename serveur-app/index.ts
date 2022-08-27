import express from "express";
import dotenv from "dotenv";
import path from "path";
import { routerClient } from "./routes/client.routes";
import { routerRating } from "./routes/rating.routes";
import { routerMsg } from "./routes/chatMsg.routes";
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/client", routerClient);
app.use("/rating", routerRating);
app.use("/message", routerMsg);

app.use('/dist', express.static(path.join(process.cwd(), 'dist/')));
app.use(express.static(path.join(process.cwd(), 'public/')));


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
