import React from 'react'
import { FaGraduationCap, FaBrain, FaCloudsmith } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import { ValueWrapper } from './styles'


function ValuesComponent({ valueData }) {
    const details = [2, 8, 9, 6, 4, 5, 6, `d`, 4, 2, 'e', true]
    return (
        <ValueWrapper>
            <div className="valueblock">
                {
                    details.map((lekan, index) =>  (
                            <div key={index}>
                                <p>{lekan}</p>
                            </div>
                        )
                    
                    )}
            </div>
            <div className="valuebox">
                <div className="valueblock">
                    <div className="valuea">
                        <div className="iconbox">
                            <i className="icon"><FaGraduationCap /></i>
                        </div>
                        <h3> Quality Education</h3>
                        <p> We deliver quality education in all our schools</p>
                    </div>
                    <div className="valueb">
                        <div className="iconbox">
                            <i className="icon"><FaBrain /></i>
                        </div>
                        <h3> Intellectual Development</h3>
                        <p> We deliver quality education in all our schools</p>
                    </div>
                    <div className="valuec">
                        <div className="iconbox">
                            <i className="icon"><FaCloudsmith /></i>
                        </div>
                        <h3> Moral Ethics</h3>
                        <p> We deliver quality education in all our schools</p>
                    </div>
                </div>
            </div>

        </ValueWrapper>
    )
}

export default ValuesComponent