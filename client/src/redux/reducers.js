import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
  } from "./actions";
  const session = { session: {name:'',userName:'',loggedIn:false} }
  export default (state = session, { type, user }) => {
    Object.freeze(state);
    switch (type) {
      case RECEIVE_CURRENT_USER:
        return user;
      case LOGOUT_CURRENT_USER:
        return session;
      default:
        return state;
    }
  };