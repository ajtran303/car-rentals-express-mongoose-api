import express, { json } from "express"
import mongoose, { ConnectOptions } from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import carRoutes from "./routes/cars"
import customerRoutes from "./routes/customers"
import customerRentalRoutes from "./routes/customerRentals"
import HTTPMiddleware from "./utils/interfaces/HTTPMiddleware"

// CONFIG

dotenv.config()
const app = express()
app.use(cors())
app.use(json())

const PORT = process.env.PORT || 6001
const MONGO_URL = process.env.MONGO_URL || ""

mongoose.set("strictQuery", false)
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Connected at port:${PORT}`)
    )
  })
  .catch(err => console.log(`${err}, did not connect`)
  )

// ROUTES

const customerRentalMiddleware: HTTPMiddleware = (req, res, next) => {
  req.customerId = req.params.customerId
  next()
}

app.use("/customers", customerRoutes)
app.use("/cars", carRoutes)
app.use(
  "/customers/:customerId/rentals",
  customerRentalMiddleware,
  customerRentalRoutes
)

