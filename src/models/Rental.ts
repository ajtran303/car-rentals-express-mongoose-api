import { Schema, model } from "mongoose";

const RentalSchema = new Schema(
  {
    car: {
      type: Schema.Types.ObjectId,
      ref: "Car",
      required: true
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true
    },
    pickupTime: {
      type: Date,
      default: Date.now(),
      required: true
    },
    returnTime: {
      type: Date,
      default: Date.now(),
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

const Rental = model("Rental", RentalSchema)
export default Rental
