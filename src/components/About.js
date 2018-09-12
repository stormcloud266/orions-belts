import React from 'react';
import Sprite from '../images/orion-svg-sprite.svg';

const About = (props) => {
  return (
    <section className="About wrapper">
      <div className="About__text">
        <h2 className="About__title">They Are out of This World</h2>
        <p className="About__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ducimus enim corporis eos vero culpa cupiditate, quis earum quod, rem ratione voluptas consequuntur incidunt, consequatur ipsum soluta necessitatibus obcaecati.</p>
      </div>

      <div className="About__card-container">
        <div className="About__card">
          <svg><use xlinkHref={`${Sprite}#money-box-1`}></use></svg>
          <h3>Affordable</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ex temporibus vel aut saepe?</p>
        </div>
        <div className="About__card">
          <svg><use xlinkHref={`${Sprite}#watch-1`}></use></svg>
          <h3>Long Lasting</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus explicabo, adipisci excepturi.</p>
        </div>
        <div className="About__card">
          <svg><use xlinkHref={`${Sprite}#world-map-1`}></use></svg>
          <h3>Ships Internationally</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt velit, exercitationem, minima ipsa animi blanditiis labore.</p>
        </div>
      </div>
    </section>
  )
}

export default About;
