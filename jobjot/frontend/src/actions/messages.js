// add the actions for our two messages create mess and get erros
import { CREATE_MESSAGE, GET_ERRORS } from './types';
// CREATE a MESSAGE
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg,
  };
};
// RETURN the ERRORS
export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status },
  };
};
