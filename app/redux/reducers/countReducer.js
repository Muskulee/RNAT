const initialState = {
  count: 0,
  username: "",
  password: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "COUNT_INCREASE":
      console.log("state.user.name", action.payload);
      // return {
      //     username : action.payload.username,
      //     password : action.payload.password
      //   };
      //    default:
      //        return state;
      //    }
      return {
        ...state,
        count: state.count + 1,
      };
    case "COUNT_DECREASE":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
