
export default(state = [], payload) => {
  let storedState = state;
  switch (payload.type) {
    case 'add':
      if (!storedState.find(x => x.id === payload.item.id)) {
        return [...state, payload.item];
      } else {
        for (const item in storedState) {
          if (storedState[item].id === payload.item.id) {
            storedState[item].qty = parseInt(storedState[item].qty, 10) + parseInt(payload.item.qty, 10);
            return [...storedState];
          }
        }
      }
      break;
    case 'change':
      for (const item in storedState) {
        if (storedState[item].id === payload.item.id) {
          storedState[item].qty = parseInt(payload.item.qty, 10);
          return [...storedState];
        }
      }
      break;
    default:
        return state;
  }
};
