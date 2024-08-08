import { Schema, model } from "mongoose"

const CarSchema = new Schema(
  {
    make: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    isAvailable: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
)

const Car = model("Car", CarSchema)
export default Car
