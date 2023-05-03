import express from "express";
import theatersMuviesController from "./6-controllers/theaters-muvies-controller"
import routeNotFound from "./3-maddlware/route-not-found";
import catchAll from "./3-maddlware/catch-all";
import appConfig from "./2-utils/app-config";



const server = express()
server.use(express.json());
server.use("/api",theatersMuviesController);
server.use("*",routeNotFound);
server.use(catchAll);
server.listen(appConfig.port,(()=>console.log(`listen on port ${appConfig.port}`)));
