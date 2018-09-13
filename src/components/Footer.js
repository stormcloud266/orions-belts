import React from 'react';
import Sprite from '../images/orion-svg-sprite.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';


class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="Footer__inner wrapper">
          <div className="Footer__social">
            <div className="Footer__icons">
              <p>Community</p>
              <div>
                <svg><use xlinkHref={`${Sprite}#instagram-1`}></use></svg>
                <svg><use xlinkHref={`${Sprite}#twitter-1`}></use></svg>
                <svg><use xlinkHref={`${Sprite}#tumblr-1`}></use></svg>
                <svg><use xlinkHref={`${Sprite}#youtube-1`}></use></svg>
              </div>
            </div>
            <div className='copywrite'>
              <p>Copywrite 2018<span>|</span>Created by <a href="https://twitter.com/TA_Coding">TA_Coding</a></p>
            </div>
          </div>

          <nav className="Footer__nav">
            <div className="Footer__nav-section">
              <p className="Footer__nav-title">Navigation</p>
              <ul>
                <li><AnchorLink href="#home">Home</AnchorLink></li>
                <li><AnchorLink href="#about" offset="50">About</AnchorLink></li>
                <li><AnchorLink href="#features">Features</AnchorLink></li>
                <li><AnchorLink href="#gallery" offset="50">Gallery</AnchorLink></li>
              </ul>
            </div>

            <div className="Footer__nav-section">
              <p className="Footer__nav-title">Shop</p>
              <ul>
                <li><a href="#x">Belts</a></li>
                <li><a href="#x">Accessories</a></li>
                <li><a href="#x">Care products</a></li>
                <li><a href="#x">Kids</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer
