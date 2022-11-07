const fs = require("fs").promises;

const createFile = (req, res) => {
  try {
    const { fname, data } = req.body;

    const file = fs.writeFile(fname, data);
    res.status(200).json({
      response: file,
      message: "file created succssefully",
    });
  } catch (error) {
    res.status(400).json({
      message: "not created",
      response: error,
    });
  }
};
module.exports = {
  createFile,
};
