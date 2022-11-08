const fs = require("fs").promises;

const createFile = async (req, res) => {
  try {
    const { fname, data } = req.body;

    const file = await fs.writeFile(fname, data);
    res.status(200).json({
      response: file,
      message: "file created successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "not created",
      response: error,
    });
  }
};

const readFile1 = async (req, res) => {
  try {
    const { path } = req.body;
    const resp = await fs.readFile(path);
    res.status(200).json({
      response: resp.toString(),
      message: "successfully readied",
    });
  } catch (error) {
    res.status(400).json({
      message: "not readied",
      response: error,
    });
  }
};
//Shifting file from one folder to another folder
const shiftFile = async (req, res) => {
  try {
    const { source, destination } = req.body;
    const resp = await fs.rename(source, destination);
    res.status(200).json({
      response: resp,
      message: "successfully shifted",
    });
  } catch (error) {
    res.status(400).json({
      response: error,
      message: "unable to shift this file",
    });
  }
};
//delete file
const removeFile = async (req, res) => {
  try {
    const { path } = req.body;
    const resp = await fs.unlink(path);
    res.status(200).json({
      response: resp,
      message: "file deleted successfully ",
    });
  } catch (error) {
    res.status(400).json({
      error: error,
      message: "unable to delete this file",
    });
  }
};
module.exports = {
  createFile,
  readFile1,
  shiftFile,
  removeFile,
};
