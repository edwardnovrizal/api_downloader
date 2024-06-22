const config = require("../config/config");

function ValidasiUrl(domain, url) {
  try {
  const parsedUrl = new URL(url);
    switch (domain) {
      case "dailymotion":
        const validateDailymotion = config.URL_DAILYMOTION.includes(parsedUrl.hostname);
        if (validateDailymotion) {
          return true;
        }
        return false;
      case "facebook":
        const validateFacebook = config.URL_FACEBOOK.includes(parsedUrl.hostname);
        if (validateFacebook) {
          return true;
        }
        return false;
      case "instagram":
        const validateInstagram = config.URL_INSTAGRAM.includes(parsedUrl.hostname);
        if (validateInstagram) {
          return true;
        }
        return false;
      case "pinterest":
        const validatePinterest = config.URL_PINTEREST.includes(parsedUrl.hostname);
        if (validatePinterest) {
          return true;
        }
        return false;
      case "soundcloud":
        const validateSoundcloud = config.URL_SOUNDCLOUD.includes(parsedUrl.hostname);
        if (validateSoundcloud) {
          return true;
        }
        return false;
      case "tiktok":
        const validateTiktok = config.URL_TIKTOK.includes(parsedUrl.hostname);
        if (validateTiktok) {
          return true;
        }
        return false;
      case "twitter":
        const validateTwitter = config.URL_TWITTER.includes(parsedUrl.hostname);
        if (validateTwitter) {
          return true;
        }
        return false;
      case "youtube":
        const validateYoutube = config.URL_YOUTUBE.includes(parsedUrl.hostname);
        if (validateYoutube) {
          return true;
        }
        return false;
      default:
        return false;
    }
  } catch (error) {
    return false
  }
}

module.exports = ValidasiUrl;
