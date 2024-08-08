import Car from "../models/Car"
import ReqRes from "../utils/interfaces/ReqRes"

// CREATE

export const postCar: ReqRes = async (req, res) => {
  try {
    const car = new Car(req.body)
    await car.save()
    res.status(201).send(car)
  } catch (err) {
    res.status(400).send("Bad Request")
  }
}

// READ

// READ ALL

// UPDATE

// PATCH

// DESTROY
