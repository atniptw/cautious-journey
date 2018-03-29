import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Home from '../Home';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const addCommit = jest.fn();
    return shallow(<Home addCommit={addCommit} />)
}

describe('Home component', () => {
    it('should render home component', () => {
        const component = setup();
        expect(component).toMatchSnapshot();
    });
});