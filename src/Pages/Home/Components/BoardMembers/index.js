import React from 'react'
import { Link } from 'react-router-dom'
import BoardMember1 from '../../../../Assets/Home/board-member-1.jpeg'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BoardWrap } from './style'

function BoardMembers() {
    return (
        <BoardWrap>
            <div className="boardintro">
                <div className="boardintroa">
                    <p>BOARD MEMBERS</p>
                    <h1>Meet Our Awesome Board Members</h1>
                </div>
            </div>
            <div className="boardparentflexbox">
                <div className="boardchildflexbox">
                    <div className="boardchildbox1">
                        <Link to='/'> <img src={BoardMember1} alt='' className='board-mem-img' /> </Link>
                        <div className="boardiconbox">
                            <div className="boardiconboxtitle">
                                <h3>Okutubo Lekan</h3>
                                <p>The Principal</p>
                            </div>
                            <div className="boardiconboxsocial">
                                <a href="https://facebook.com/lekanokutubo" className='boardicon'><FaFacebook /></a>
                                <a href="https://facebook.com/lekanokutubo" className='boardicon'><FaTwitter /></a>
                                <a href="https://facebook.com/lekanokutubo" className='boardicon'><FaInstagram /></a>
                            </div>
                        </div>
                    </div>
                    <div className="boardchildbox2">
                        <div className="boardiconbox">
                            <div className="boardiconboxtitle">
                                <h3>Lekan Michael</h3>
                                <p>The Principal</p>
                            </div>
                            <div className="boardiconboxsocial">
                                <a href="https://facebook.com/lekanokutubo" className='boardicon'><FaFacebook /></a>
                                <a href="https://facebook.com/lekanokutubo" className='boardicon'><FaTwitter /></a>
                                <a href="https://facebook.com/lekanokutubo" className='boardicon'><FaInstagram /></a>
                            </div>
                        </div>
                        <Link to='/'> <img src={BoardMember1} alt='' className='board-mem-img' /> </Link>
                    </div>
                    <div className="boardchildbox3">
                        <Link to='/'> <img src={BoardMember1} alt='' className='board-mem-img' /> </Link>
                        <div className="boardiconbox">
                            <div className="boardiconboxtitle">
                                <h3>Olakved Ola</h3>
                                <p>Vice Principal</p>
                            </div>
                            <div className="boardiconboxsocial">
                                <a href="https://facebook.com/lekanokutubo" className='boardicon'><FaFacebook /></a>
                                <a href="https://facebook.com/lekanokutubo" className='boardicon'><FaTwitter /></a>
                                <a href="https://facebook.com/lekanokutubo" className='boardicon'><FaInstagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </BoardWrap>
    )

}

export default BoardMembers