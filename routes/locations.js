var express = require("express");
var router = express.Router();
const locationController = require('../controllers/locations')


router.get("/", locationController.index);
router.get("/new", locationController.new);
router.get("/:id", locationController.show);
router.get("/:id/on-map", locationController.showOnMap)
router.post("/", locationController.create);
router.delete("/:id", locationController.delete);


module.exports = router;