const INITIAL_STATE = {
  loading: false,
  message: null,
  reviewsList: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "reviews_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "reviews_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "reviews_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        reviewsList: payload.data,
      };
    default:
      return state;
  }
};
