import { GET_NEWSDATA } from "../constants";

function NewsReducer(state = { news: []}, action ) {
  switch (action.type) {
    case GET_NEWSDATA:
      return { news: action.payload };
    default:
      return state;
  }
}

export default NewsReducer;

