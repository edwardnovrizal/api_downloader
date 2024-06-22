const { ServiceYoutube } = require("../services/service");
const PorsessResultData = require("../utils/prosesResultData");
const ValidasiUrl = require("../utils/validasiUrl");

async function YoutubeController(req, res) {
  const { url } = req.query;
  const validateUrl = ValidasiUrl("youtube", url);
  if (!validateUrl) {
    return res.status(400).json({
      code: res.statusCode,
      message: "URL Youtube Not Valid",
    });
  }
  try {
    const result = await ServiceYoutube(url);
    const data = PorsessResultData(result);
    if (data === null) {
      return res.status(400).json({
        code: res.statusCode,
        message: "Can't Load Data This URL",
      });
    }
    return res.status(200).json({
      code: res.statusCode,
      message: "Succesfully Load Data Youtube",
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      code: res.statusCode,
      message: error.message,
    });
  }
}

module.exports = YoutubeController;
