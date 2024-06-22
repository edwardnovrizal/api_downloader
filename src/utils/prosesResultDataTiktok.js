const config = require("../config/config");

function PorsesResultDataTiktok(result) {
  let media = [];
  if (result.data != undefined) {
    result.data.forEach((element) => {
      console.log(element);
      const data = {
        url: element.download ?? config.NO_URL_AVAILABLE,
        quality: element.status ?? config.NO_QUALITY_AVAILABLE,
        type: element.type ?? config.NO_TYPE_AVAILABLE,
        size: element.Size ?? config.NO_SIZE_AVAILABLE,
      };
      media.push(data);
    });
    const datas = {
      title: result.data[0].title ?? config.NO_TITLE_AVAILABLE,
      thumbnail: result.data[0].thumbnail ?? config.NO_IMAGE_AVAILABLE,
      duration: result.data[0].duration ?? config.NO_DURATION_AVAILABLE,
      media: media,
    };

    return datas;
  }
  return null;
}

module.exports = PorsesResultDataTiktok;
