require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const ctrl = require("./controller");

const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

//test
// app.get("/api/test", (req, res, next) => {
//   res.status(200).send({ message: "yeppp" });
// });

app.get("/api/houses", ctrl.getHouses);
app.post("/api/house", ctrl.addHouse);
app.delete("/api/house/:id", ctrl.deleteHouse);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
