const INITIAL_STATE = {
  loading: false,
  message: null,
  colors: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "product_color_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "product_color_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "product_color_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        colors: payload.data,
      };

    default:
      return state;
  }
};
