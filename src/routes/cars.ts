import { Router } from "express"
import { postCar } from "../controllers/cars"

const routes = Router()

routes.post("/", postCar)

export default routes
