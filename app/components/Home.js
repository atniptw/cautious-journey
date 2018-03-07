// @flow
import { remote, ipcRenderer } from 'electron';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import addCommit from '../actions/commit'
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.openDialog = this.openDialog.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMainProcessResponse = this.handleMainProcessResponse.bind(this);
    
    ipcRenderer.on('mainprocess-response', this.handleMainProcessResponse);
  }
  
  handleMainProcessResponse(event, commit) {
    const { addCommit } = this.props;
    addCommit(commit);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = { repo: this.state.value };
    ipcRenderer.send('request-mainprocess-action', data );
  }

  openDialog() {
    const repo = remote.dialog.showOpenDialog({
      properties: ['openDirectory'],
    })[0];

    this.setState(() => {
      return { value: repo };
    });
  }


  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Code Analyzer</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Repo:
              <input type="text" value={this.state.value}/>
            </label>
            <button onClick={this.openDialog}>Open</button>
          </form>
          <Link to="/commit">to Counter</Link>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addCommit: PropTypes.func.isRequired
};
