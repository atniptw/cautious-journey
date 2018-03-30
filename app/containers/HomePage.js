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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CommitActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);