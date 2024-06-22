const config = require("../config/config");

function ProsesResultDataInstagram(result) {
  let media = [];
  if (result.data != undefined) {
    result.data.forEach((element) => {
      const data = {
        url: element.url ?? config.NO_URL_AVAILABLE,
        quality: element.quality ?? config.NO_QUALITY_AVAILABLE,
        type: element.extension ?? config.NO_TYPE_AVAILABLE,
        size: element.formattedSize ?? config.NO_SIZE_AVAILABLE,
      };
      media.push(data);
    });
    const datas = {
      title: result.title ?? config.NO_TITLE_AVAILABLE,
      thumbnail: result.data[0].thumbnail ?? config.NO_IMAGE_AVAILABLE,
      duration: result.duration ?? config.NO_DURATION_AVAILABLE,
      media: media,
    };

    return datas;
  }
  return null;
}

module.exports = ProsesResultDataInstagram;
