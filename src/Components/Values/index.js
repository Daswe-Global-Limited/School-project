import React from 'react'
import './style.css'
import { FaGraduationCap, FaBrain, FaCloudsmith} from 'react-icons/fa'
// import { Link } from 'react-router-dom'



function ValuesComponent() {
  return (
    <div className="valuewrapper">
            <div className="valuebox">
                <div className="valueblock">
                    <div className="valuea">
                        <div className="iconbox">
                            <i className="icon"><FaGraduationCap/></i>
                        </div>
                        <h3> Quality Education</h3>
                        <p> We deliver quality education in all our schools</p>
                    </div>
                    <div className="valueb">
                        <div className="iconbox">
                            <i className="icon"><FaBrain/></i>
                        </div>
                        <h3> Intellectual Development</h3>
                        <p> We deliver quality education in all our schools</p>
                    </div>
                    <div className="valuec">
                        <div className="iconbox">
                            <i className="icon"><FaCloudsmith/></i>
                        </div>
                        <h3> Moral Ethics</h3>
                        <p> We deliver quality education in all our schools</p>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default ValuesComponent