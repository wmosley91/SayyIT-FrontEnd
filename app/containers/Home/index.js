/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import FlatButton from 'material-ui/FlatButton';
import NavBar from 'components/NavBar';

import FacebookIcon from 'react-icons/lib/fa/facebook';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GoogleIcon from 'react-icons/lib/fa/google';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {

  static propTypes = { children: React.PropTypes.node,};
  static childContextTypes = { muiTheme: React.PropTypes.object };
  getChildContext() {var theme = getMuiTheme(); return { muiTheme: theme }};

  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          <NavBar siteName="Sayy It"/>
        </header>

        <main className="mainContainer">
          <div className="tagLine">Tag Your Friends</div>
          <div className="signUpButtons">
            <FlatButton label="Facebook" fullWidth={true} backgroundColor="#3B5998" hoverColor="#00f59c" style={{color:"#FFFFFF", marginTop:'15px', height:'50px'}} icon={<FacebookIcon />}/>
            <FlatButton label="Twitter" fullWidth={true} backgroundColor="#1dcaff" hoverColor="#00f59c" style={{color:"#FFFFFF", marginTop:'15px', height:'50px'}} icon={<TwitterIcon />}/>
            <FlatButton label="Google" fullWidth={true} backgroundColor="#ea4335" hoverColor="#00f59c" style={{color:"#FFFFFF", marginTop:'15px', height:'50px'}} icon={<GoogleIcon />}/>
          </div>
        </main>

        <footer>

        </footer>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
