import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Commit from '../Commit';

import Adapter from 'enzyme-adapter-react-16';
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
  it('should display commit', () => {
    const component = setup();
    expect(component).toMatchSnapshot();
  });
});
