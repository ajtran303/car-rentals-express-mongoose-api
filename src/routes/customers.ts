import { Router } from "express"
import { postCustomer } from "../controllers/customers"

const routes = Router()

routes.post("/", postCustomer)

export default routes
