import {
  GET_SOURCE_FAIL,
  GET_SOURCE_REQUEST,
  GET_SOURCE_SUCCESS,
} from "../constants";
function SourceReducer(state = { source: [] }, action) {
  switch (action.type) {
    case GET_SOURCE_REQUEST:
      return { loading: true };
    case GET_SOURCE_SUCCESS:
      return { loading: false, source: action.payload };
    case GET_SOURCE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export default SourceReducer;
