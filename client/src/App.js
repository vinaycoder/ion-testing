import React from 'react';
import Navbar from  './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { AuthRoute, ProtectedRoute } from "../src/redux/route";
import { connect } from "react-redux";
import { checkLoggedIn } from "./redux/actions";
class App extends React.Component{
  componentDidMount()
  {
    this.props.checkLoggedIn();
    
  }
  render(){
    const isLoggedIn={
      loggedIn: this.props.session.loggedIn
    }
    console.log(isLoggedIn);
        return (
          <BrowserRouter>
            <div className="App">
            <Navbar loggedIn={this.props.session.loggedIn} name={this.props.session.name} />
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/dashboard" component={Dashboard} /> */}
            <AuthRoute path="/login" loggedIn={this.props.session.loggedIn} component={Login} />
            {/* <Route path="/dashboard" component={Dashboard} />  */}
           <ProtectedRoute path="/dashboard" loggedIn={this.props.session.loggedIn} component={Dashboard} />
          }
            </div>
          </BrowserRouter>
      );
  } 
}
const mapStateToProps = ({ session }) => ({
  session
});
const mapDispatchToProps = dispatch => ({
  checkLoggedIn: () => dispatch(checkLoggedIn())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
// export default App;
