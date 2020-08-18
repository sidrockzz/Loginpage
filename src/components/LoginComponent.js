import React, { Component } from 'react';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import login from './login';
import Loginpage from './Loginpage';
import AdminPage from './AdminPage';
import Guestpage from './Guestpage';
class LoginComponent extends Component {
    render(){
    return (
        <Router>
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>Login</Link>
                            </li>
                            </ul>
                        </div>
                    </div>

                        <Switch>
                            <Route exact path='/' component={login}  />
                            <Route path="/login/" component={login} />
                            <Route path="/Loginpage/" component={Loginpage}/>
                            <Route path="/AdminPage/" component={AdminPage}/>
                            <Route path="/Guestpage/" component={Guestpage}/>
                        </Switch>
                
    </Router>
        )
    }
}

export default LoginComponent;