/* 使用localStorge的时候，使用try catch 因为有些浏览器如果关闭本地存储，浏览器就会报出异常错误 */
let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default {
  city: defaultCity
}
