// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Commit from '../components/commit';
import * as CommitActions from '../actions/commit';

type Props = {};

// export default class HomePage extends Component<Props> {
//   props: Props;

//   render() {
//     return (
//       <Home />
//     );
//   }
// }

function mapStateToProps(state) {
  return { }; 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CommitActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);