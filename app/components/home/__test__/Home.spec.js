import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { ipcRenderer } from 'electron';
import Home from '../Home';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


describe('Home component', () => {
    const addCommit = jest.fn();
    let component;
    
    beforeEach(() => {
        component = shallow(<Home addCommit={addCommit} />)
    });
    
    it('should render home component', () => {
        expect(component).toMatchSnapshot();
    });

    it('should request repository parse', () => {
        const repoPath = '/example/repo/path/';

        component.setState(() => {
            return {value: repoPath};
        });

        component.find('form').simulate('submit', { preventDefault: () => {} });

        expect(ipcRenderer.send).toHaveBeenCalled();
    });

    it('should handle parse repository response', () => {
        expect(ipcRenderer.on).toHaveBeenCalled();
        expect(ipcRenderer.on.mock.calls[0][0]).toEqual('parse-repository-response');

        const call = ipcRenderer.on.mock.calls[0][1];

        const commit = {
            userName: 'Test User',
        };

        call(() => {}, commit);

        expect(addCommit).toHaveBeenCalledWith(commit);
    });
});