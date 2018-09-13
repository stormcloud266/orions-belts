import React from 'react';
import Particles from 'react-particles-js';

const Header = (props) => {
  return (
    <header className="Hero">
      <Particles
        // height='500'
        style={{
          width: '100%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }}
        params={{
            		particles: {
            			line_linked: {
            				distance: 100,
                    opacity: '.2'
            			},
                  size: {
                    value: 2
                  }
            		}
            	}}
      />
      <nav className="Hero__nav wrapper">
        <a href="#x" className="Hero__logo">Orion's Belts</a>

        <ul>
          <li><a href="#x">Home</a></li>
          <li><a href="#x">About</a></li>
          <li><a href="#x">Testimonials</a></li>
          <li><a href="#x">Shop</a></li>
        </ul>

      </nav>

      <div className="Hero__text wrapper">
        <h1>Orion's Belts</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat reprehenderit odio quae esse, consequatur est nisi nobis, quasi quos repellendus.</p>
        <a href="#x">Shop Now</a>
      </div>
    </header>
  )
}

export default Header;
