import requests from "../../../helpers/requests";

export const productDetailView = (id) => (dispatch) => {
  dispatch({ type: "product_view_start", payload: id });
  requests
    .productDetailView(id)
    .then(({ data }) => {
      dispatch({ type: "product_view_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";

      dispatch({ type: "product_view_error", payload: message });
    });
};
