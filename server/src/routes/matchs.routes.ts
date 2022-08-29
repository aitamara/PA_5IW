import MatchsController from "../controller/matchs/MatchsController"
import { Router } from 'express';

const routerMatchs = Router();

const MatchsCtl = new MatchsController();

routerMatchs.post('/createOrUpdateMatch', MatchsCtl.createOrUpdateMatch);

export { routerMatchs };