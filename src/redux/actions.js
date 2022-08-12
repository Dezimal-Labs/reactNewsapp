import axios from "axios";
import {
  GET_SOURCE_FAIL,
  GET_SOURCE_REQUEST,
  GET_SOURCE_SUCCESS,
  GET_HEADLINE_FAIL,
  GET_HEADLINE_REQUEST,
  GET_HEADLINE_SUCCESS,
  GET_NEWSDATA,
} from "./constants";

const api = () => (dispatch) => {
  dispatch({ type: GET_SOURCE_REQUEST });
  axios("https://news-api-jade-psi.vercel.app/api/sources")
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: GET_SOURCE_SUCCESS,
        payload: response.data.sources,
      });
    })
    .catch((error) => {
      dispatch({ type: GET_SOURCE_FAIL, payload: error });
    });
};
const api2 = (id) => (dispatch) => {
  dispatch({ type: GET_HEADLINE_REQUEST });
  axios(`https://news-api-jade-psi.vercel.app/api/everything?sources=${id}`)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: GET_HEADLINE_SUCCESS,
        payload: response.data.articles,
      });
    })
    .catch((error) => {
      dispatch({ type: GET_HEADLINE_FAIL, payload: error });
    });
};

const NewsData = (item) => (dispatch) => {
  console.log(item);
  dispatch({ type: GET_NEWSDATA, payload: item });
};
export { api, api2, NewsData };
