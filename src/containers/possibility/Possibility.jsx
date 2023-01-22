import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" >
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam culpa at, odit aliquid tempora veniam! Placeat voluptatem ex praesentium dignissimos, molestias nihil illo libero culpa est sequi eum id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quos eveniet deserunt quibusdam nostrum laborum at qui consequatur vero dolor sed odit quisquam aperiam, debitis delectus iusto perferendis, a rerum!</p>

        <h4>Request Early Access to Get Started</h4>
      </div>
    </div> 

  )
}

export default Possibility