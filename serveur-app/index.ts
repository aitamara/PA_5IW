import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import { routerClient } from "./utils/client/client.routes";
import { routerCommunity } from "./utils/community/community.routes";
import { routerRating } from "./utils/rating/rating.routes";
import { routerMsg } from "./utils/chat/chatMsg.routes";
import { routerPassions } from "./utils/passions/passions.routes";
import authMiddleware from "./middleware/auth";
import authRoute from "./auth/auth.routes";
import io from "socket.io";
import { cookieParser } from "cookie-parser";
import { sessions } from "express-session";
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from "./utils/socket/interface";
import Authentication from "./auth/token.validation";

dotenv.config();

const PORT = 81;
const oneDay = 1000 * 60 * 60 * 24;
const app = express();
app.use(
  cors({ origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE", preflightContinue: false, optionsSuccessStatus: 204 })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authMiddleware);
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

app.use("/auth", authRoute);

/* app.use(cookieParser());
//a get route for adding a cookie
app.get("/setcookie", (req, res) => {
  res.cookie(`Cookie token name`, `encrypted cookie string Value`, {
    maxAge: 5000,
    // expires works the same as the maxAge
    expires: new Date("01 12 2021"),
    secure: true,
    httpOnly: true,
    sameSite: "lax",
  });
  res.send("Cookie have been saved successfully");
}); */

/* app.use(
  sessions({
    secret: Authentication.TOKEN,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
); */

app.use("/client", routerClient);
app.use("/rating", routerRating);
app.use("/message", routerMsg);
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
