//the backend for https://www.scottnet.dev

import express, { Router } from "express";
import { createServer } from "http";
import fsE from "fs-extra";
import cors from "cors"

//load routes
import indexRoute from "./api/index.js"
import MinersHavenRoute from "./api/mh.js"
import BuildIslandRoute from "./api/bi.js"

const app = express()

app.use(cors());
app.use("/", indexRoute)
app.use('/mh', MinersHavenRoute)
app.use('/bi', BuildIslandRoute)

const httpServer = createServer(app)

httpServer.listen(4000, () => {
    console.log("Server running")
})
