// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Commit.css';

import { Link } from 'react-router-dom';

const Commit = ({ hash, userName, date, files }) => (
      <div data-tid={hash}>
        <div>"Hash: {hash}"</div>
        <div>"User Name: {userName}"</div>
        <div>"Date: {date}"</div>
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>
      </div>
)

Commit.propTypes = {
  hash: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Commit
