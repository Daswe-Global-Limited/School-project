import React from 'react'
import Logo from '../../Assets/Logo/logo2.png'
import LoginImage from '../../Assets/Login/login-img.jpg'
import { Link } from 'react-router-dom'
import { LoginWrapper } from './style'


function LoginPage() {
    return (
        <LoginWrapper>
            <div className="login-container">
                <div className="div1">
                    <div className="div1a">
                        <img src={Logo} alt="logo" />
                    </div>
                    <h1>Admin Login Portal</h1>
                    <p>Welcome back! Login with your credentials</p>

                    <div className="div1b">
                        <form>
                            <div className="forminput">
                                <label for="phone" id="phone">Phone Number</label>
                                <input type="text" id="phone" name="phone" />
                            </div>

                            <div className="forminput">
                                <label for="pin">Pin</label>
                                <input type="text" id="pin" maxlength="8" />
                                <p id="forgotpassword">Forgot Password?</p>
                            </div>

                            <div className="btncase">
                                <button className="login-btn1">
                                <Link to='/' >Back Home</Link>
                                </button>
                                <button className="login-btn2">
                                <Link to='/schools' className='login-btn'>Login</Link>
                                </button>
                                <button className="login-btn1">
                                    <Link to='/signup' >Sign Up</Link>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="div2">
                    <img src={LoginImage} alt="" />
                    <div className="imgoverlay"></div>
                    <div className="logintext">
                        <h3>Use this form for Admin login</h3>
                    </div>
                </div>
            </div>


        </LoginWrapper>
    )
}

export default LoginPage