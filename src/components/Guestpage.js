import React from 'react';
import {Link} from 'react-router-dom';
import { Component } from 'react';
class Guestpage extends Component {
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
                    Guestpage
                </h3>
            </div>
        </div>
    )
    }
}
export default Guestpage;
