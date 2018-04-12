import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return 'im loggedout';
      default:
        return 'im logged in';
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo" href="">
            QuickSurvey
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
// function mapStateToProps(state) {
//   return { auth: state.auth };
// }

export default connect(mapStateToProps)(Header);
