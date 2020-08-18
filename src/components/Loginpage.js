import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';

class Loginpage extends Component {
    logout = async (e) =>{
        e.preventDefault()
        this.props.history.push('/login');
    }
    render(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/login"}>GB-GCGC</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02"></div>
                            <button type="submit" className="btn btn-danger" onClick={this.logout}>Logout</button>
                 </div>
            </nav>
            <div className='centered'>
                <h3>
                    User
                </h3>
            </div>
        </div>
    )
    }
}
export default Loginpage;