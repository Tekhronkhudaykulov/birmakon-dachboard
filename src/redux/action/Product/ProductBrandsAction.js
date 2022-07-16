import requests from "../../../helpers/requests";

export const brands = () => (dispatch) => {
  dispatch({ type: "product_brands_start" });
  requests
    .brands()
    .then(({ data }) => {
      dispatch({ type: "product_brands_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";

      dispatch({ type: "product_brands_error", payload: message });
    });
};

export const units = () => (dispatch) => {
  dispatch({ type: "units_start" });
  requests
    .units()
    .then(({ data }) => {
      dispatch({ type: "units_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "units_error", payload: message });
    });
};

export const currencyValue = () => (dispatch) => {
  dispatch({ type: "currency_start" });
  requests
    .currency()
    .then(({ data }) => {
      dispatch({ type: "currency_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";

      dispatch({ type: "currency_error", payload: message });
    });
};
