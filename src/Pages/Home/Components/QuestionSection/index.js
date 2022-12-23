import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'
import questionimage from '../../../../Assets/Home/anyQuestion2.png'
import { QuestionWrapper } from './styles'

const QuestionSection = () => {
    return (
        <QuestionWrapper>
            <div className='question-container'>
                <div className='question-sec-content'>
                    <div className='question-col-1'>
                    <Link> <img src={questionimage} alt='' className='questionImage' /> </Link>
                    </div>
                    <div className='col-2'>
                        <div className='form-layout'>
                            <div className='form-container'>
                                <p className='sign-in-txt'>Sign in with</p>
                                <div className='social-login'>
                                    <i><FaFacebook size={20} /></i>
                                    <i><FaTwitter size={20} /></i>
                                    <i><FaGithub size={20} /></i>
                                </div>
                                <div className='divider'>
                                    <p><span>OR</span></p>
                                </div>
                                <form className='que-form' action=''>
                                    <input type='text' placeholder='Name' />
                                    <input type='email' placeholder='Email' />
                                    <input type='password' placeholder='Password' />
                                    <button className='question-section-btn'>Create your account</button>
                                </form>
                            </div>
                            <div className='form-footer'>
                                <p>By signing up, you agree to our
                                    <span className='primary-color'> Terms, Data Policy</span> and
                                    <span className='primary-color'> Cookies Policy</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </QuestionWrapper>
    )
}

export default QuestionSection