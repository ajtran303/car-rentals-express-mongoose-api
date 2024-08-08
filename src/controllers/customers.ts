import Customer from "../models/Customer"
import ReqRes from "../utils/interfaces/ReqRes"

// CREATE

export const postCustomer: ReqRes = async (req, res) => {
  try {
    const customer = new Customer(req.body)
    await customer.save()
    res.status(201).send(customer)
  } catch (err) {
    res.status(400).send("Bad Request")
  }
}

// READ

// READ ALL

// UPDATE

// PATCH

// DESTROY
