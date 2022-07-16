import requests from "../../../helpers/requests";

export const renameProduct = (params) => (dispatch) => {
  dispatch({ type: "rename_product_start", payload: params });
  requests
    .renameProduct(params)
    .then(({ data }) => {
      dispatch({
        type: "rename_product_success",
        payload: data,
      });
      alert("Товар успешно изменень");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "rename_product_error", payload: message });
      alert("Что то пошло не так!");
    });
};
