import requests from "../../../helpers/requests";

export const reviews = (id) => (dispatch) => {
  dispatch({ type: "reviews_start", payload: id });
  requests
    .reviews(id)
    .then(({ data }) => {
      dispatch({ type: "reviews_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";

      dispatch({ type: "reviews_error", payload: message });
    });
};
