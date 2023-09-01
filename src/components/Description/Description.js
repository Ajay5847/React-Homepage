import React from 'react'
import dummy from '../../assets/addiction1.jpg'
import './Description.scss'

function Description() {
  return (
    <div className='Desc-container'>
        <div className="first-content">
            <div className="left-desc">
                <h4>Recent addiction</h4>
                <h2>A trio of evocative aromas</h2>
                <p>Our Aromatique Incense have a unique square profile and are made without a bamboo core for a gentle burn.</p>
            </div>
            <div className="right-img">
                <img src={dummy} alt="Addiction" />
            </div>
        </div>
    </div>
  )
}

export default Description