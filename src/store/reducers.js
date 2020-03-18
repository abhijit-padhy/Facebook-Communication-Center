
export const initialState = {
  user: ""
}

function resetStore() {
  return initialState;
}

function user(state, action) {
  switch (action.type) {
    case "setUser":
      return Object.assign({}, state, action.payload);
      break;
  
    default:
      break;
  }
}

/**
 * Used to combine all reducers defined for the store or React Context
 * First define all reducers and then execute
 * @param {Object} state - contains previous state
 * @param {Object} action - contains redcuer type,reducer name, payload
 * @returns reduce method based on action.reducer
 */
const reducers = {resetStore, user}
export const combinedReducers = function (state, action) {
  return reducers[action.reducer](state, action);
}