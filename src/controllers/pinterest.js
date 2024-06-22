const { ServicePinterst } = require("../services/service");
const PorsessResultData = require("../utils/prosesResultData");
const ValidasiUrl = require("../utils/validasiUrl");

async function PinterestController(req, res) {
  const { url } = req.query;
  const validateUrl = ValidasiUrl("pinterest", url);
  if (!validateUrl) {
    return res.status(400).json({
      code: res.statusCode,
      message: "URL Pinterest Not Valid",
    });
  }
  try {
    const result = await ServicePinterst(url);
    const data = PorsessResultData(result);
    if (data === null) {
      return res.status(400).json({
        code: res.statusCode,
        message: "Can't Load Data This URL",
      });
    }
    return res.status(200).json({
      code: res.statusCode,
      message: "Succesfully Load Data Pinterest",
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      code: res.statusCode,
      message: error.message,
    });
  }
}

module.exports = PinterestController;
