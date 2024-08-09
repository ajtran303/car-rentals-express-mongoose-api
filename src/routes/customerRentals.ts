import { Router } from "express"
import { postRental } from "../controllers/customerRentals"

const routes = Router()

routes.post("/", postRental)

export default routes
