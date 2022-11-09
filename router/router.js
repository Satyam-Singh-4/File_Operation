const router = require("express").Router();
const controller = require("../controller/fileController");
const multer = require("multer");
var multerParse = multer();
//const upload = multer({ dest: './new_file/form.txt' })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './new_file');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

// const storage = multer.diskStorage();
// const upload = multer({
//   storage: storage,
// });

router.post("/create", controller.createFile);
router.post("/read", upload.single("path"), controller.readFile1);
router.post("/shift", multerParse.any(), controller.shiftFile);
router.post("/remove", controller.removeFile);

module.exports = router;
