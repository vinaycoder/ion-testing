import React from 'react';
import { connect } from "react-redux";
import { logout } from "../redux/actions";

const Dashboard = ({ logout, session }) => (
  <>
  <div className="container">
  <h1>Hi {session.userName}</h1>
    <p>You are now logged in!</p>
    <button type="button" onClick={logout} className="btn btn-primary">Logout</button> 
  </div>
       
  </>
);

const mapStateToProps = ({ session }) => ({
  session
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);