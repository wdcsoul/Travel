/* state 指所有的公用数据 */
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
