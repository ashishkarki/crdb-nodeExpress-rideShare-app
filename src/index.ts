import 'reflect-metadata'
import { createConnection } from 'typeorm'
// import * as express from "express";
import express from 'express'
import * as bodyParser from 'body-parser'
import { RouterInit } from './routes'
const PORT = process.env.PORT || 36257

//Connects to database by utilizing values in ormconfig.js
createConnection()
  .then(async (connection) => {
    //Creates instance of express
    const app = express()
    app.use(bodyParser.json())

    //Front end code
    app.use(express.static('public'))

    //Inits routes from router/index.ts
    RouterInit.init(app)

    //Connects to PORT
    app.listen(PORT)
    console.log(`Express server has started on port ${PORT}.`)
  })
  .catch((error) => console.log(error))
