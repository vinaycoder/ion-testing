import * as apiUtil from '../redux/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});
const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = ({ message }) => {
   alert(message);
   return false;
  };
  export const clearErrors = () => ({
    type: CLEAR_ERRORS
  });



export const login = user => async dispatch => {
    const response = await apiUtil.login(user);
    const data = await response.json();
   
  if (response.ok) {
      return dispatch(receiveCurrentUser(data));
    }
    return receiveErrors(data)
  };
  export const signup = user => async dispatch => {
    const response = await apiUtil.signup(user);
    const data = await response.json();
    
    if (response.ok) {
      return dispatch(receiveCurrentUser(data));
    } 
    return receiveErrors(data)  
  };

  export const logout = () => async dispatch => {
    const response = await apiUtil.logout();
    const data = await response.json();
  if (response.ok) {
      return dispatch(logoutCurrentUser());
    }
    return receiveErrors(data)
  };


  export const checkLoggedIn = () => async dispatch => {    
    const response = await apiUtil.checkLoggedIn();
    const data = await response.json();
  if (response.status===200) {
      return dispatch(receiveCurrentUser(data));
    }
    // return receiveErrors(data)  
  };
