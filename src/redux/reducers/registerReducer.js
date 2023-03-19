// Define the initial state of our store
const initialState = {
  count: 0,
};

// Define the reducer function that will modify the state based on dispatched actions
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
