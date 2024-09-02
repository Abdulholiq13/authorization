const blog = (
  state = JSON.parse(localStorage.getItem("wishlist")) || [],
  action
) => {
  switch (action.type) {
    case "BLOG": {
      let index = state.findIndex((item) => item.id === action.payload.id);
      if (index < 0) {
        state = [...state, action.payload];
      } else {
        state = state.filter((item) => item.id !== action.payload.id);
      }
      localStorage.setItem("blog", JSON.stringify(state));
      return state;
    }
    default:
      return state;
  }
};

export default blog;
