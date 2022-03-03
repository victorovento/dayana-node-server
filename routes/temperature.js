const { Router } = require("express");
const {
  getTemperatures,
  patchTemperatures,
  putTemperatures,
  deleteTemperatures,
  postTemperatures,
} = require("../controllers/temperature");
const router = Router();

router.get("/", getTemperatures);

router.put("/:id", putTemperatures);

router.post("/", postTemperatures);

router.delete("/", deleteTemperatures);

router.patch("/", patchTemperatures);

module.exports = router;
