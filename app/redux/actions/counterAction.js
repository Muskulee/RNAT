export const increment = (user) => {
  console.log("user", user);
  return {
    type: "COUNT_INCREASE",
    payload: {
      username: user.name,
      password: user.password,
    },
  };
};

export const decrement = () => {
  return {
    type: "COUNT_DECREASE",
  };
};
