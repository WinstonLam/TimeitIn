import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from "lodash";

export const fetchPostsAndUsers = function () {
  return async function (dispatch, getState) {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, "userId"));
    userIds.forEach((userId) => dispatch(fetchUser(userId)));
  };
};

export const fetchPosts = function () {
  return async function (dispatch) {
    const response = await jsonPlaceHolder.get("posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = function (userId) {
  return async function (dispatch) {
    const response = await jsonPlaceHolder.get(`users/${userId}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};
