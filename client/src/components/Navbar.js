import React from 'react';
import {Link,withRouter} from 'react-router-dom'
function Navbar (props){
  return (
     <nav>
        <div className="nav-wrapper" style={{background:"#6200ee"}}>
        <Link to="/" className="brand-logo">&nbsp;ION</Link>      
        <ul id="nav-mobile" className="right">
        {props.loggedIn ? 
            <li><Link to="/dashboard">Hi .. {props.name}</Link></li>:<li><Link to="/login">Login</Link></li>
            }
        <li><Link to="/dashboard">Dashboard</Link></li> 
        </ul>
        </div>
  </nav>
  
  )
}

export default withRouter(Navbar);
