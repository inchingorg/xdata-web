const xdata = require('@inchingorg/xdata');
const encoder = xdata.encoder;
const decoder = xdata.decoder;

export default class DataUtil {
  static isHexString(data) {
    let formatedData = decoder.format(data);
    return /^[0-9A-F]+$/i.test(formatedData);
  }

  static isBase64String(data) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/g.test(data);
  }
}
