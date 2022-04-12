const initialState = {
  search: false,
};
const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH_BOTTON': {
      return {
        ...state,
        search: !action.payload,
      };
    }
    default:
      return state;
    // throw new Error('Reducer error');
  }
};
export default globalReducer;
