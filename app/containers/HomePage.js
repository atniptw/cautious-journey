// @flow
import React, { Component } from 'react';
import Home from '../components/home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Commit from '../components/commit';
import * as CommitActions from '../actions/commit';

type Props = {};

function mapStateToProps(state) {
  return { }; 
}

<<<<<<< HEAD
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CommitActions, dispatch);
=======
  render() {
    return <Home />;
  }
>>>>>>> 2c37e738fd45fd4826256fa62e7876fefe9e36b1
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);