import {SETLOGIN, SETSPLASH, SETWEB3} from '../../styles/constants';

export const setSplash = () => {
  return {
    type: SETSPLASH,
    payload: {},
  };
};

export const setWeb3 = () => {
  return {
    type: SETWEB3,
    payload: {},
  };
};

export const setLogin = () => {
  return {
    type: SETLOGIN,
    payload: {},
  };
};
