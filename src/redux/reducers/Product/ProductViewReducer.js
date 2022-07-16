const INITIAL_STATE = {
  loading: false,
  message: null,
  productView: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "product_view_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "product_view_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "product_view_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        productView: payload.data,
      };
    default:
      return state;
  }
};
