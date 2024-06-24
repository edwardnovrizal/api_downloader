const config = require("../config/config");

function PorsesResultDataTiktok(result) {
  let media = [];
  let music = [];
  if (result.data != undefined) {
    result.data.forEach((element) => {
      if (element.type == "mp3") {
        const musicData = {
          title: element.title,
          Size: element.Size,
          duration: element.duration,
          url: element.download,
          thumbnail: element.thumbnail,
          type: element.type,
        };
        music.push(musicData);
      } else if (element.type == "video") {
        const data = {
          url: element.download ?? config.NO_URL_AVAILABLE,
          quality: element.status ?? config.NO_QUALITY_AVAILABLE,
          type: element.type ?? config.NO_TYPE_AVAILABLE,
          size: element.Size ?? config.NO_SIZE_AVAILABLE,
        };

        media.push(data);
      } else {
        const data = {
          url: "",
          quality: "",
          type: "",
          size: "",
        };

        media.push(data);
      }
    });
    const datas = {
      title: result.data[0].title ?? config.NO_TITLE_AVAILABLE,
      thumbnail: result.data[0].thumbnail ?? config.NO_IMAGE_AVAILABLE,
      duration: result.data[0].duration ?? config.NO_DURATION_AVAILABLE,
      media: media,
      music: music,
    };

    return datas;
  }
  return null;
}

module.exports = PorsesResultDataTiktok;
