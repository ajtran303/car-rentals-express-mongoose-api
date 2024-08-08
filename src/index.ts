import express, { json } from "express"
import mongoose, { ConnectOptions } from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

// CONFIG

dotenv.config()
const app = express()
app.use(cors())
app.use(json())

