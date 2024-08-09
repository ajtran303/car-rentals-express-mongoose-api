import Rental from "../models/Rental"
import ReqRes from "../utils/interfaces/ReqRes"

// CREATE

export const postRental: ReqRes = async (req: any, res: any) => {
  try {
    const customerId = req.params.customerId
    const { carId, pickupTime, returnTime, price } = req.body
    const rental = new Rental({
      customer: customerId,
      car: carId,
      pickupTime,
      returnTime,
      price
    })
    await rental.save()
    res.status(201).send(rental)
  } catch (err) {
    res.status(400).send("Bad Request")
  }
}

// READ

// READ ALL

// UPDATE

// PATCH

// DESTROY
