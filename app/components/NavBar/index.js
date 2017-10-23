/**
*
* NavBar
*
*/

import React from 'react';
import { Link } from 'react-router-dom';

import Bars from 'react-icons/lib/fa/bars';

import './style.css';
import './styleM.css';

export default class NavBar extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      menuOpen:false
    }
  }

  handleMenu = () => {
    if(this.state.menuOpen === 10)
    {
      this.setState({
        menuOpen:false
      }, function() {

      })
    }
    else if(this.state.menuOpen === false)
    {
      this.setState({
        menuOpen:true
      })
    }
  }

  renderMenu() {
    if(this.state.menuOpen === true) {
      return(
        <nav className="navMobile">

        </nav>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="navBar">
          <div className="siteName">{this.props.siteName}</div>

          <nav className="nav">
            <Link to="/" className="navButton">Home</Link>
            <Link to="/explore" className="navButton">Explore</Link>
            <Link to="/about" className="navButton">About</Link>
            <Link to="/contact" className="navButton">Contact</Link>
          </nav>

          <Bars className="menuIcon" onClick={this.handleMenu}/>

        </div>

        {this.renderMenu()}
      </div>
    );
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object
};
