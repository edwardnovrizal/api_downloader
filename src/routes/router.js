const express = require("express");
const router = express.Router();
const home = require("../controllers/home");
const FacebookController = require("../controllers/facebook");
const InstagramController = require("../controllers/instagram");
const TiktokController = require("../controllers/tiktok");
const TwitterController = require("../controllers/twitter");
const DailymotionController = require("../controllers/dailymotion");
const PinterestController = require("../controllers/pinterest");
const SoundcloudController = require("../controllers/soundcloud");
const YoutubeController = require("../controllers/youtube");
const AioController = require("../controllers/aio");

router.get("/home", home.GET);
router.get("/facebook", FacebookController);
router.get("/instagram", InstagramController);
router.get("/tiktok", TiktokController);
router.get("/twitter", TwitterController);
router.get("/dailymotion", DailymotionController);
router.get("/pinterest", PinterestController);
router.get("/soundcloud", SoundcloudController);
router.get("/youtube", YoutubeController);

router.get("/aio", AioController);

module.exports = router;
