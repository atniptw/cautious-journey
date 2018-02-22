import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Commit from '../Commit';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const commit = {
    hash: 'd715bad5-1c17-4821-bdc0-0154e9d06c7e',
    userName: 'Test User',
    date: '2018-02-14T21:00:42-05:00',
    files: ['example/path/file.txt', 'example/path/file2.txt']
  };
  return shallow(<Commit {...commit}/>);
}

describe('Commit component', () => {
  it('should should display commit', () => {
    const component = setup();
    expect(component).toMatchSnapshot();
  });
});
