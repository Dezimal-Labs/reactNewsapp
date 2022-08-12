import {
  createstore,
  combineReducers,
  applyMiddleware,
  createStore,
} from "redux";
import thunk from "redux-thunk";
import SourceReducer from "./reducers/sourceReducer";
import HeadlineReducer from "./reducers/headlineReducer";
import NewsReducer from "./reducers/newsReducer";

const initialState = {
  Source: { source: [] },
  Headline: { headline: [] },
  News: { news: []}
};
const reducer = combineReducers({
  Source: SourceReducer,
  Headline: HeadlineReducer,
  News: NewsReducer
});
const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
