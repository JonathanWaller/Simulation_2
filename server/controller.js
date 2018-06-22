module.exports = {
  getHouses: (req, res) => {
    let db = req.app.get("db");
    db.get_houses().then(houses => {
      //   console.log(houses);
      return res.status(200).send(houses);
    });
  },

  addHouse: (req, res) => {
    const { name, address, city, state, zip, image_url } = req.body;
    let db = req.app.get("db");

    db.add_house([name, address, city, state, zip, image_url]).then(house => {
      //   console.log(house);
      console.log(req.body);
      return res.status(200).send(house);
    });
  },

  deleteHouse: (req, res) => {
    let db = req.app.get("db");
    db.delete_house([req.params.id]).then(() => {
      console.log(req.params);
      return res.sendStatus(200);
    });
  }
};
