import axios from "axios";
import qs from 'qs';

/* 
* 去掉数字单位
* @param String
* @return Number
*/
export const extNumber = (str) => {
    return str.toString().replace(/[a-zA-Z]{1,}$/g, '') || 0;
}

/* 
* 数字千进制格式
* @params Number
* @return String
* */
export const thousandBitSeparator = (num) => {
  return num && (num.toString().indexOf('.') !== -1 ? num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
    return $1 + ",";
  }) : num.toString().replace(/(\d)(?=(\d{3}))/g, function ($0, $1) {
    return $1 + ",";
  }));
}

/* 
* 处理服务器请求
* @params String (url), Object (params), Function (cb)
* @return Function
* */
const SERVER_URL = 'http://60.30.94.170:9728/api/Values'
export const $post = (url, params, cb) => {
  axios.post(SERVER_URL + url, qs.stringify(params))
    .then(response => response.data)
    .then(res => {
      if (res.status) {
        cb && cb(res.result);
      } else {
        Message.warning({
          content: res.message,
          duration: 2.5,
          closable: true
        });
      }
    })
    .catch(e => {
      Message.error({
        content: e.message,
        duration: 3.5,
        closable: true
      });
    })
}