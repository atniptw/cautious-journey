import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Commit from '../components/commit';
import * as CommitActions from '../actions/commit';

function mapStateToProps(state) {
  return {
    commits: state.commits
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CommitActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Commit);
