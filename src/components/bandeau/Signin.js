import React from "react";

class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          password:''
        }
    }

    
    handleEmailChange = (e) => {
        this.setState({email:e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password:e.target.value})
    }


    render() {
        return(
            <form className="form-signin"
            style={{
                marginTop: 100
            }}
            >
                <h2 className="form-signin-heading"> Inscription </h2>
                <label htmlFor="inputEmail" className="sr-only">Email</label>
                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only">Mot de passe</label>
                <input type="mot de passe" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Mot de passe" required />
                <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">S'inscrire</button>
            </form>
            );
        }
    }

    export default Signin;