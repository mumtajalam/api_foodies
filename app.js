const express = require("express");
const app = express();
const cors = require("cors");
const colors = require("colors");
const { default: mongoose } = require("mongoose");
const restaurantRoute = require("./router/restaurants");
const menuRoute = require("./router/menu");
const userRoute = require("./router/user");
const ordersRoute = require("./router/orders");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    console.log("server started...");
    res.send("app running.");
  } catch {}
});

app.use("/restaurants", restaurantRoute);
app.use("/menu", menuRoute);
app.use("/user", userRoute);
app.use("/orders", ordersRoute);
mongoose.connect(
  "mongodb+srv://mumtajalam21:3qqVdwxkDMbSfJc@cluster0.fmfryr3.mongodb.net/test?retryWrites=true&w=majority",
  () => {
    console.log(colors.yellow("MongoDB connected..."));
  }
);

// mongoose.connect(
//   "mongodb+srv://Suvro96:Suvro_96@cluster0.uq4uv.mongodb.net/foodmart?retryWrites=true&w=majority",
//   () => {
//     console.log("mogoDb connected...");
//   }
// );

app.listen(process.env.PORT || 4000);
