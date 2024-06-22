const { ServiceInstagram } = require("../services/service");
const ProsesResultDataInstagram = require("../utils/prosesResultDataInstagram");
const ValidasiUrl = require("../utils/validasiUrl");

async function InstagramController(req, res) {
  const { url } = req.query;
  const validateUrl = ValidasiUrl("instagram", url);
  if (!validateUrl) {
    return res.status(400).json({
      code: res.statusCode,
      message: "URL Instagram Not Valid",
    });
  }
  try {
    const result = await ServiceInstagram(url);
    const data = ProsesResultDataInstagram(result);
    if (data === null) {
      return res.status(400).json({
        code: res.statusCode,
        message: "Can't Load Data This Account",
      });
    }
    return res.status(200).json({
      code: res.statusCode,
      message: "Succesfully Load Data Instagram",
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      code: res.statusCode,
      message: error.message,
    });
  }
}

module.exports = InstagramController;
