export default {
  setCurInx(state, payload) {
    const { index, text } = payload;
    state.curInx = index;
    console.log(text);
  },
  setDate(state, data) {
    state.data = data;
  }
};
