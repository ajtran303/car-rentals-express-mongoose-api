import { Schema, model } from "mongoose"

const CustomerSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

const Customer = model("Customer", CustomerSchema)
export default Customer
