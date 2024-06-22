const config = require("../config/config");

function PorsessResultData(result) {
  let media = [];

  if (result.medias != undefined) {
    result.medias.forEach((element) => {
      const data = {
        url: element.url,
        quality: element.quality,
        type: element.extension,
        size: element.formattedSize,
      };
      media.push(data);
    });
    const datas = {
      title: result.title ?? config.NO_TITLE_AVAILABLE,
      thumbnail: result.thumbnail ?? config.NO_IMAGE_AVAILABLE,
      duration: result.duration ?? "",
      media: media,
    };

    return datas;
  }
  return null;
}

module.exports = PorsessResultData;
