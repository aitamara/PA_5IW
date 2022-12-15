import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import session from "express-session";
import { routerClient } from "./utils/client/client.routes";
import { routerCommunity } from "./utils/community/community.routes";
import { routerRating } from "./utils/rating/rating.routes";
//import { routerMsg } from "./utils/msg/chatMsg.routes";
import { routerConv } from "./utils/conv/chatConv.routes";
import { routerPassions } from "./utils/passions/passions.routes";
import { routerPropositons } from "./utils/propositions/propositions.routes";
import { routerPro } from "./utils/pro/pro.routes";
import authMiddleware from "./middleware/auth";
import authRoute from "./auth/auth.routes";
import io from "socket.io";
import cookieParser from "cookie-parser";
import { sessions } from "express-session";
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from "./utils/socket/interface";
import Authentication from "./auth/token.validation";
import { routerMatch } from "./utils/match/match.routes";

dotenv.config();

const PORT = 81;
const oneDay = 1000 * 60 * 60 * 24;
const app = express();
app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: Authentication.TOKEN,
    cookie: { maxAge: oneDay },
  })
);
app.use(
  cors({ origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE", preflightContinue: false, optionsSuccessStatus: 204 })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));


app.get("/getcookie", (req, res) => {
  res.send(req.cookies);
});

app.use(authMiddleware);
app.use("/auth", authRoute);
app.use("/client", routerClient);
app.use("/pro", routerPro);
app.use("/rating", routerRating);
app.use("/match", routerMatch);
app.use("/conv", routerConv);
app.use("/propositions", routerPropositons);
app.use("/passions", routerPassions);
app.use("/community", routerCommunity);

let test = new io.Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>();
test.on("connection", (socket) => {
  console.log("test");
});

app.use("/dist", express.static(path.join(process.cwd(), "dist/")));
app.use(express.static(path.join(process.cwd(), "public/")));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
