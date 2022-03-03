const { Router } = require("express");
const {
  getHumidity,
  patchHumidity,
  putHumidity,
  deleteHumidity,
  postHumidity,
} = require("../controllers/humidity");
const router = Router();

router.get("/", getHumidity);

router.put("/:id", putHumidity);

router.post("/", postHumidity);

router.delete("/", deleteHumidity);

router.patch("/", patchHumidity);

module.exports = router;
