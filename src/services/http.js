const { default: axios } = require("axios");
const config = require("../config/config");

async function fetchDataWeb(url) {
  const fullUrl = `${config.ENDPOINT_WEB}?url=${url}&key=${config.API_KEY}`;
  const { data } = await axios.get(fullUrl);
  return data;
}

async function fetchDataApi(path, url) {
  const fullUrl = `${config.ENDPOINT_API}${path}.php?url=${url}`;
  const { data } = await axios.get(fullUrl);

  return data;
}

module.exports = {
  fetchDataWeb,
  fetchDataApi,
};
