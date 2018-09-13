import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Sprite from '../images/orion-svg-sprite.svg';

class Nav extends React.Component {
  state = {
    checked: false
  }
  componentDidMount() {
    window.addEventListener('scroll', this.closeMenu);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.closeMenu);
  }

  closeMenu = () => {
    this.setState({checked: false})
  }

  render() {
    return (
      <nav className="Header__nav">
        <div className="Header__nav-inner wrapper">
          <a className="Header__logo">Orion's Belts</a>
          <ul className="desktop-nav">
            <li><AnchorLink href='#home'>Home</AnchorLink></li>
            <li><AnchorLink href='#about' offset='50'>About</AnchorLink></li>
            <li><AnchorLink href='#features' offset='50'>Features</AnchorLink></li>
            <li><AnchorLink href='#gallery' offset='100'>Gallery</AnchorLink></li>
          </ul>
          <div className="mobile-nav">
            <input type="checkbox" name="mobile-nav__toggle" className="mobile-nav__toggle" checked={this.state.checked} onChange={() => {
              this.setState((prevState) => (
                {checked: !prevState.checked}
              ))
            }}/>

            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mobile-nav__menu-container">
              <ul className="mobile-nav__menu">

                <li><AnchorLink href='#home' onClick={this.closeMenu} offset='0'>Home</AnchorLink></li>
                <li><AnchorLink href='#about' onClick={this.closeMenu} offset='50'>About</AnchorLink></li>
                <li><AnchorLink href='#features' onClick={this.closeMenu} offset='0'>Features</AnchorLink></li>
                <li><AnchorLink href='#gallery' onClick={this.closeMenu} offset='50'>Gallery</AnchorLink></li>
              </ul>

              <div className="mobile-nav__info">

                <div className="mobile-nav__social-icons">
                  <svg><use xlinkHref={`${Sprite}#instagram-1`}></use></svg>
                  <svg><use xlinkHref={`${Sprite}#twitter-1`}></use></svg>
                  <svg><use xlinkHref={`${Sprite}#tumblr-1`}></use></svg>
                  <svg><use xlinkHref={`${Sprite}#youtube-1`}></use></svg>
                </div>

                <p>Created by <a href="https://twitter.com/TA_Coding">TA_Coding</a></p>
              </div>
            </div>

          </div>
        </div>
      </nav>
    )
  }
};
export default Nav;
