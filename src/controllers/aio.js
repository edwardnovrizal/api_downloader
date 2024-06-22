const { ServiceAio } = require("../services/service");

async function AioController(req, res) {
  const { url } = req.query;

  try {
    const result = await ServiceAio(url);
    if (result === null) {
      return res.status(400).json({
        code: res.statusCode,
        message: "URL Not Valid",
      });
    }
    return res.status(200).json({
      code: res.statusCode,
      message: "Succesfully Load Data",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      code: res.statusCode,
      message: error.message,
    });
  }
}

module.exports = AioController;
