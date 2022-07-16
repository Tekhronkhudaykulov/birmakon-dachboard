import requests from "../../../helpers/requests";

export const productColor = () => (dispatch) => {
  dispatch({ type: "product_color_start" });
  requests
    .productColor()
    .then(({ data }) => {
      dispatch({ type: "product_color_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";

      dispatch({ type: "product_color_error", payload: message });
    });
};
