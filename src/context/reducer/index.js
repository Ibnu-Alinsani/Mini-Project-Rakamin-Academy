import * as TP from "../type";

function Reducer(state, action) {
  switch (action.type) {
    case TP.FIND_GROUP:
      return {
        ...state,
        todos: action.payload,
      };
    case TP.FIND_ITEM:
      return {
        ...state,
        items: action.payload,
      };
    case TP.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export default Reducer;
