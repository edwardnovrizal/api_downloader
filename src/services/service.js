const config = require("../config/config"); 
const extractUrl = require("../utils/extractUrl");
const PorsessResultData = require("../utils/prosesResultData");
const ProsesResultDataInstagram = require("../utils/prosesResultDataInstagram");
const PorsesResultDataTiktok = require("../utils/prosesResultDataTiktok");
const { fetchDataWeb, fetchDataApi } = require("./http");

async function ServiceFacebook(url) {
  return fetchDataWeb(url);
}

async function ServiceInstagram(url) {
  return fetchDataApi("insta", url);
}

async function ServiceTiktok(url) {
  return fetchDataApi("tiktok", url);
}

async function Servicetwitter(url) {
  return fetchDataWeb(url);
}

async function ServiceDailymotion(url) {
  return fetchDataWeb(url);
}

async function ServicePinterst(url) {
  return fetchDataWeb(url);
}

async function ServiceSoundcloud(url) {
  return fetchDataWeb(url);
}

async function ServiceYoutube(url) {
  return fetchDataWeb(url);
}

async function ServiceAio(url) {
  const urlExtract = extractUrl(url);
  if (urlExtract === null) {
    return null;
  }
  const { hostname } = new URL(urlExtract);
  if (config.URL_FACEBOOK.includes(hostname)) {
    const result = await fetchDataWeb(url);
    const data = PorsessResultData(result);
    if (data === null) {
      return null;
    }
    return data;
  } else if (config.URL_INSTAGRAM.includes(hostname)) {
    const result = await fetchDataApi("insta", url);
    const data = ProsesResultDataInstagram(result);
    if (data === null) {
      return null;
    }
    return data;
  } else if (config.URL_TIKTOK.includes(hostname)) {
    const result = await fetchDataApi("tiktok", url);
    const data = PorsesResultDataTiktok(result);
    if (data === null) {
      return null;
    }
    return data;
  } else if (config.URL_TWITTER.includes(hostname)) {
    const result = await fetchDataWeb(url);
    const data = PorsessResultData(result);
    if (data === null) {
      return null;
    }
    return data;
  } else if (config.URL_DAILYMOTION.includes(hostname)) {
    const result = await fetchDataWeb(url);
    const data = PorsessResultData(result);
    if (data === null) {
      return null;
    }
    return data;
  } else if (config.URL_PINTEREST.includes(hostname)) {
    const result = await fetchDataWeb(url);
    const data = PorsessResultData(result);
    if (data === null) {
      return null;
    }
    return data;
  } else if (config.URL_SOUNDCLOUD.includes(hostname)) {
    const result = await fetchDataWeb(url);
    const data = PorsessResultData(result);
    if (data === null) {
      return null;
    }
    return data;
  } else if (config.URL_YOUTUBE.includes(hostname)) {
    const result = await fetchDataWeb(url);
    const data = PorsessResultData(result);
    if (data === null) {
      return null;
    }
    return data;
  } else {
    return null;
  }
}

module.exports = {
  ServiceFacebook,
  ServiceInstagram,
  ServiceTiktok,
  Servicetwitter,
  ServiceDailymotion,
  ServicePinterst,
  ServiceSoundcloud,
  ServiceYoutube,
  ServiceAio,
};
