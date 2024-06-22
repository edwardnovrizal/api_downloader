const GET = async (req, res) => {
  return res.status(200).json({
    code: res.statusCode,
    message: "Welcome Home",
  });
};

module.exports = {
  GET,
};
