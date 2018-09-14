import React from 'react';
import Sprite from '../images/orion-svg-sprite.svg';
import beltImg from '../images/belt.jpg';

const Features = (props) => {
  return (
    <section className="Features" id="features">
      <div className="Features__inner wrapper">
        <div className="Features__text-container">
        <div className="Features__container">
          <svg><use xlinkHref={`${Sprite}#screwdriver-1`}></use></svg>
          <div className="Features__text">
            <p className="Features__title">Taylor Crafted</p>
            <p className="Features__body">Literally. Taylor makes all our belts.</p>
          </div>
        </div>
        <div className="Features__container">
          <svg><use xlinkHref={`${Sprite}#diploma-1`}></use></svg>
          <div className="Features__text">
            <p className="Features__title">Quality Materials</p>
            <p className="Features__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptatibus, suscipit maiores?</p>
          </div>
        </div>
        <div className="Features__container">
          <svg><use xlinkHref={`${Sprite}#healthcare-1`}></use></svg>
          <div className="Features__text">
            <p className="Features__title">Custom Sizes</p>
            <p className="Features__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, at, saepe.</p>
          </div>
        </div>
      </div>
        <div className="Features__image-container">
          <img src={beltImg} alt="" className="Features__image"/>
        </div>
      </div>
    </section>
  )
}

export default Features;
