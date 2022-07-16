const INITIAL_STATE = {
  loading: false,
  message: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "rename_product_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "rename_product_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "rename_product_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
      };
    default:
      return state;
  }
};
