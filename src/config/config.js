require("dotenv").config();

const config = {
  ENDPOINT_WEB: process.env.ENDPOINT_WEB,
  ENDPOINT_API: process.env.ENDPOINT_API,
  API_KEY: process.env.API_KEY,
  NO_IMAGE_AVAILABLE: "https://www.its.ac.id/tmesin/wp-content/uploads/sites/22/2022/07/no-image.png",
  NO_TITLE_AVAILABLE: "No Title Available",
  NO_DURATION_AVAILABLE: "",
  NO_QUALITY_AVAILABLE: "HD",
  NO_TYPE_AVAILABLE: "",
  NO_SIZE_AVAILABLE: "",
  NO_URL_AVAILABLE: "",
  URL_FACEBOOK: ["www.facebook.com", "fb.watch", "www.fb.watch", "fb.com", "www.fb.com", "fb.watch", "www.fb.watch"],
  URL_INSTAGRAM: ["www.instagram.com", "instagram.com", "ig.com", "www.ig.com", "instagr.am", "www.instagr.am"],
  URL_DAILYMOTION: ["www.dailymotion.com", "dailymotion.com", "dm.com", "www.dm.com", "dai.ly", "www.dai.ly"],
  URL_PINTEREST: ["www.pinterest.com", "pinterest.com", "pin.it", "www.pin.it"],
  URL_TIKTOK: ["www.tiktok.com", "tiktok.com", "vt.tiktok.com", "www.vt.tiktok.com", "vt.tiktok.com", "www.vt.tiktok.com"],
  URL_TWITTER: ["www.twitter.com", "twitter.com", "x.com", "www.x.com"],
  URL_YOUTUBE: ["www.youtube.com", "youtube.com", "youtu.be", "www.youtu.be"],
  URL_SOUNDCLOUD: ["www.soundcloud.com", "soundcloud.com", "sc.com", "www.sc.com", "on.soundcloud.com"],
};

module.exports = config;
