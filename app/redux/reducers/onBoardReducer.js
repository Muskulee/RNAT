import {SETLOGIN, SETSPLASH, SETWEB3} from '../../styles/constants';

const initialState = {
  connect: false,
  loaded: false,
  start: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SETSPLASH:
      return {
        ...state,
        loaded: true,
      };

    case SETWEB3:
      return {
        ...state,
        connect: true,
      };

    case SETLOGIN:
      return {
        ...state,
        start: true,
      };
    //   break;

    default:
      return state;
      break;
  }

  // case:
};
