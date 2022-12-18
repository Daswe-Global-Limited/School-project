import React from 'react'
import Logo from '../../Assets/Logo/logo2.png'
import SignupImage from '../../Assets/Login/login-img.jpg'
import { Link } from 'react-router-dom'
import { PText, SignupWrapper, H1 } from './style'





function SignUpPage() {
  return (
<SignupWrapper> 
    <div className="signup-container">
        <div className="div1">
            <div className="div1a">
                <img src={Logo} alt="logo"/>
            </div>
            <h1>Account Signup</h1>
            <p>Welcome! Create your account Here</p>

            <div className="div1b">
                <form>
                    <div className="forminput">
                        <label for="name" id="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="forminput">
                        <label for="address" id="address">Address</label>
                        <input type="text" id="address" name="address" />
                    </div>
                    <PText>TEST TEXT</PText>
                    <H1>HEADLINE TEST</H1>
                    <div className="forminput">
                        <label for="email" id="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="forminput">
                        <label for="phone" id="phone">Phone Number</label>
                        <input type="text" id="phone" name="phone" />
                    </div>

                    <div className="forminput">
                        <label for="pin">Pin</label>
                        <input type="password" id="pin" maxlength="8" />
                    </div>
                    <div className="forminput">
                        <label for="pin">Verify Pin</label>
                        <input type="password" id="pin" maxlength="8" />
                    </div>
                    <div className="forminput">
                        <input type="submit" id="submit" maxlength="8" />
                    </div>

                    <div className="btncase">
                        <button className="btn1">
                        <Link to='/' >Back Home</Link>
                        </button>
                        <button className="btn1">
                        <Link to='/login' >Login</Link>
                        </button>
                        
                    </div>
                </form>
            </div>

        </div>
        <div className="div2">
            <img src={SignupImage}  alt=""/>
            <div className="imgoverlay"></div>
            <div className="signuptext">
                <h3>Fill this form to Register Account</h3>
            </div>
        </div>
    </div>

</SignupWrapper>



  )
}

export default SignUpPage