import React, { Component } from 'react'
import Axios from 'axios';
import { Redirect,useHistory ,Link} from 'react-router-dom';
class login extends Component {
    constructor(props){
        super(props);
    this.state={
        Login_id:"",
        password:"",
        type:"",
        redirect:false
        };

        this.handleSudmit = this.handleSudmit.bind(this);
    }

    handleAddLoginId=async e=>{
        await this.setState({
            Login_id : e.target.value,
        })
    }
    handleAddPassword=async e=>{
        await this.setState({
            password : e.target.value,
        })
    }
    handleSudmit = async (e)=>{
        e.preventDefault();
        const obj = {
            Login_id : this.state.Login_id,
            password:this.state.password
        }
        const url="http://localhost:80/login-backend/login.php"
        Axios.post(url,obj)
        .then((res) =>{
            this.setState({redirect: true});
            const type=res.data[0]['type'];
            console.log(type)
            if(type==='user'){
                this.props.history.push('/Loginpage/')
            }else if(type==='Admin'){
                this.props.history.push('/Adminpage/')
            }else if(type==='Guest'){
                this.props.history.push('/Guestpage/')
            }else{
                alert("Invalid credentials")
            }
        })
        .catch(err=>console.log(err));
    }
    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/login"}><label>GB-GCGC</label></Link>
                    </div>
                </nav>
                <div className="centered">
                    <div className="auth-inner">
                        <div className="auth-wrapper">
                            <form>
                                <h3>Login In</h3>
                                <div className="form-group">
                                    <label>Login Id</label>
                                    <input type="text" className="form-control" placeholder="Registration Number" onChange={this.handleAddLoginId}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.handleAddPassword}/>
                                </div>
                                <button type="submit" className="btn btn-danger btn-block" onClick={this.handleSudmit} >Submit</button>
                                    <p className="forgot-password text-right">
                                        Forgot <a href="#">password?</a>
                                    </p>
                             </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}

export default login;