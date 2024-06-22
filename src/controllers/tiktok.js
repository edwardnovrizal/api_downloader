const { ServiceTiktok } = require("../services/service");
const PorsesResultDataTiktok = require("../utils/prosesResultDataTiktok");
const ValidasiUrl = require("../utils/validasiUrl");

async function TiktokController(req, res) {
  const { url } = req.query;
  const validateUrl = ValidasiUrl("tiktok", url);
  if (!validateUrl) {
    return res.status(400).json({
      code: res.statusCode,
      message: "URL Tiktok Not Valid",
    });
  }
  try {
    const result = await ServiceTiktok(url);
    const data = PorsesResultDataTiktok(result);
    if (data === null) {
      return res.status(400).json({
        code: res.statusCode,
        message: "Can't Load Data This URL",
      });
    }
    return res.status(200).json({
      code: res.statusCode,
      message: "Succesfully Load Data Tiktok",
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      code: res.statusCode,
      message: error.message,
    });
  }
}

module.exports = TiktokController;
