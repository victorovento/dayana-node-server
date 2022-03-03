const express = require("express");
const cors = require("cors");
require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.temperatureRoutePath = '/api/temperature';
    this.humidityRoutePath = '/api/humidity';
    // Middlewares
    this.middlewares();
    // RUtas
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
      this.app.use(this.temperatureRoutePath, require('../routes/temperature'));
      this.app.use(this.humidityRoutePath, require('../routes/humidity'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("SERVIDOR NODE CORRIENDO EN ", this.port);
    });
  }
  
}

module.exports = Server;
