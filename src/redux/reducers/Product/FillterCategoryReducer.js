const INITIAL_STATE = {
  loading: false,
  message: null,
  fillterCategory: [],
  fillterSubCategory: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "fillter_category_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "fillter_category_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "fillter_category_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        fillterCategory: payload.data,
      };
    case "filter_SubCategory_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "filter_SubCategory_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "filter_SubCategory_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        fillterSubCategory: payload.data,
      };
    default:
      return state;
  }
};
