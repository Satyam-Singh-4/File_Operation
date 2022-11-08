const router = require("express").Router();
const controller = require("../controller/fileController");

router.post("/create", controller.createFile);
router.post("/read", controller.readFile1);
router.post("/shift", controller.shiftFile);
router.post("/remove", controller.removeFile);

module.exports = router;
