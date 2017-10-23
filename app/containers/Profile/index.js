/*
 *
 * Profile
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './style.css';
import './styleM.css';

import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';

import NavBar from 'components/NavBar';

export default class Profile extends React.PureComponent {

  static propTypes = { children: React.PropTypes.node,};
  static childContextTypes = { muiTheme: React.PropTypes.object };
  getChildContext() {var theme = getMuiTheme(); return { muiTheme: theme }};

  constructor() {
    super();
    this.state = {
      user:"",
      tags:["Cool", "funny", "hot"]
    }
  }

  renderTag = (chip, index) => {
    let chipStyle = {
      color:"#00905b",
      margin:'5px',
    }

    let rand = Math.random() * (2 - 1) + 1;

    chipStyle.animation = 'flicker '+ rand + 's ease alternate infinite';

    return(
      <Chip style={chipStyle} key={index}>Text Chip</Chip>
    )

  }

  render() {

    return (
      <div className="container">
        <Helmet title="Profile" meta={[ { name: 'description', content: 'Description of Profile' }]}/>

        <header>
          <NavBar/>
        </header>

        <main className="profileMain">
          <div className="profileBox">
            <div className="profileAvatar">
              <img src="http://avatar.technopathic.me/cat-avatar-generator.php?seed=nadeem" className="profileImg"/>
            </div>
            <div className="profileInfo">
              <div className="profileName">Nadeem</div>
              <div className="profileContent"></div>
              <div className="profileStats"></div>
            </div>
          </div>
          <input className="tagInput" type="text" placeholder="Tag 'em Here..."/>
          <FlatButton label="Confirm" backgroundColor="#00f59c" style={{marginTop:'15px', width:'200px', height:'50px'}}/>
          <div className="tagsBox">
            {this.state.tags.map((tag, index) => (
              this.renderTag(tag, index)
            ))}
          </div>
        </main>

        <footer>

        </footer>
      </div>
    );
  }
}

Profile.contextTypes = {
  router: React.PropTypes.object
};
