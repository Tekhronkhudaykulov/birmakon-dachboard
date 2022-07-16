import requests from "../../../helpers/requests";
import { toast } from "react-toastify";
export const productLock = (params) => (dispatch) => {
  dispatch({ type: "product_lock_start", payload: params });

  requests
    .productLock(params)
    .then(({ data }) => {
      dispatch({ type: "product_lock_success", payload: data });
      alert("Товар блокировань!");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      toast.error("Blocklashda hatolik!");
      dispatch({ type: "product_lock_error", payload: message });
    });
};

export const productOnLock = (params) => (dispatch) => {
  dispatch({ type: "product_unlock_start", payload: params });

  requests
    .productOnLock(params)
    .then(({ data }) => {
      dispatch({ type: "product_unlock_success", payload: data });
      alert("Товар разблокирован!");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      toast.error("Blockdan ochishda hatolik!");
      dispatch({ type: "product_unlock_error", payload: message });
    });
};
