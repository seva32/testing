import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions/index';

class App extends Component {
  renderButton() {
    return this.props.auth ? (
      <button
        onClick={() => {
          this.props.changeAuth(false);
        }}
      >
        Sign Out
      </button>
    ) : (
      <button
        onClick={() => {
          this.props.changeAuth(true);
        }}
      >
        Sign In
      </button>
    );
  }
  renderHeader() {
    return (
      <ul
        style={{
          textDecoration: 'none',
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route exact path="/post" component={CommentBox} />
        <Route exact path="/" component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
