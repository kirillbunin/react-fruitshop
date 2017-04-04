
export default(state = {}, data) => {
    if (state) {
      return state;
    } else {
      return data;
    }
};
