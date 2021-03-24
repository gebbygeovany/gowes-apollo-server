const { model, Schema } = require("mongoose");

const orderSchema = new Schema({
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  user: { type: Schema.Types.ObjectId, ref: "User" },
  logs: [
    {
      stateType: String,
      succsededAt: String,
      executedAt: String,
    },
  ],
  shipping: {
    awbNumber: String,
    courierName: String,
  },
  state: {
    stateType: String,
    createdAt: String,
    deadline: String,
  },
});

module.exports = model("Order", orderSchema);
