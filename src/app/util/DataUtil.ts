const xdata = require('@inchingorg/xdata');
const encoder = xdata.encoder;
const decoder = xdata.decoder;

export default class DataUtil {
  static isHexString(data) {
    let formatedData = decoder.format(data);
    return /^[0-9A-F]+$/i.test(formatedData);
  }

  static isBase64String(data) {
    return /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(data);
  }
}
