import express from "express";
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

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authMiddleware);
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

app.use("/auth", authRoute);
app.use("/client", routerClient);
app.use("/rating", routerRating);
app.use("/message", routerMsg);
app.use("/passions", routerPassions);
app.use("/community", routerCommunity);

/* let test = new io.Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>();
test.on("connection", (socket) => {
  console.log("test");
}); */

app.use("/dist", express.static(path.join(process.cwd(), "dist/")));
app.use(express.static(path.join(process.cwd(), "public/")));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
