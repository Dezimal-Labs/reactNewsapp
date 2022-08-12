import {
  GET_HEADLINE_FAIL,
  GET_HEADLINE_SUCCESS,
  GET_HEADLINE_REQUEST,
} from "../constants";
function HeadlineReducer(state = { headline: [] }, action) {
  switch (action.type) {
    case GET_HEADLINE_REQUEST:
      return { loading: true };
    case GET_HEADLINE_SUCCESS:
      return { loading: false, headline: action.payload };
    case GET_HEADLINE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export default (HeadlineReducer)