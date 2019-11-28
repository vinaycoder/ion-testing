import React from 'react';
import { connect } from "react-redux";
import { login } from "../redux/actions";

class Login extends React.Component{
    constructor(props) {
        super(props)
        this.userName = React.createRef();
        this.password = React.createRef();
        this.state = {
          userName : '',
          password: ''
        };
      }

      handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });        
      }

      checkValidData(str)
      {
        var iChars = ',.^/';
        for (var i = 0; i < str.length; i++) {
            if (iChars.indexOf(str[i]) !== -1) {
                alert ("Your username or password has special characters. \n ,.\^/ \n Please remove them and try again.");
                return false;
            }
        }
        return true;
      }
      onSubmit = (event) => {       
        event.preventDefault();
        if(this.userName.current.value==='' && this.password.current.value!=='')
        {
          alert('Please enter User Name');
        }else if(this.password.current.value==='' && this.userName.current.value!==''){
          alert('Please enter password');
        }else if(this.password.current.value==='' && this.userName.current.value===''){
          alert('Please enter user name and password');
        }else{  
         if(this.checkValidData(this.userName.current.value) && this.checkValidData(this.password.current.value))
         {
          this.props.login({userName:this.userName.current.value,password:this.password.current.value});
         }
        
         
        }
      }
  render(){     
      return(
        <section className="section">
        <div className="container">
        <div id="login">
        <div className="login-card">
            <div className="card-title">
            <h3>Please Sign In</h3>
            </div>
            <div className="content">
            <form onSubmit={this.onSubmit}>
                <input 
                id="email" 
                type="text" 
                name="userName" 
                title="User Name" 
                placeholder="User Name" 
                required autoFocus
                value={this.state.userName}
                onChange={this.handleInputChange}
                ref={this.userName}
                />
                <input 
                    id="password" 
                    type="password" 
                    name="password" 
                    title="password" 
                    placeholder="Password" 
                    required 
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    ref={this.password}
                    />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </div>
        </div>
        </div>
    </div>
</section>
      )
  }
 
}

const mapStateToProps = ({ errors }) => ({
  errors
});
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);