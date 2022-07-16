import requests from "../../../helpers/requests";

export const filterCategory = (category_id) => (dispatch) => {
  dispatch({ type: "fillter_category_start", payload: category_id });
  requests
    .filterCategory(category_id)
    .then(({ data }) => {
      dispatch({ type: "fillter_category_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "fillter_category_error", payload: message });
    });
};

export const filterSubCategory = (category_id) => (dispatch) => {
  dispatch({ type: "filter_SubCategory_start", payload: category_id });

  requests
    .filterCategory(category_id)
    .then(({ data }) => {
      dispatch({ type: "filter_SubCategory_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "filter_SubCategory_error", payload: message });
    });
};
