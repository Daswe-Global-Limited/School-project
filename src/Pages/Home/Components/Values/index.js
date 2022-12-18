import React from 'react'
import { ValueWrapper } from './styles'


function ValuesComponent({ valueData }) {


    return (
        <ValueWrapper>
            <div className="valuebox">
            <div className="valueblock">
                {valueData.map((cardItem, index) => (
                    <div key={index}>
                        <div className="value">
                            <div className="iconbox">
                                <i className="icon">{cardItem.icon}</i>
                            </div>
                            <h3>{cardItem.bigText}</h3>
                            <p>{cardItem.smallText}</p>
                        </div>
                    </div>

                ))}
            </div>
            </div>

        </ValueWrapper>
    )
}

export default ValuesComponent