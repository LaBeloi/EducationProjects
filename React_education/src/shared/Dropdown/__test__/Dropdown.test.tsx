import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from "enzyme"; 
import { Dropdown } from "../Dropdown";

Enzyme.configure({ adapter: new Adapter() })

describe('DropDown', () => {
    test('should render', () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />}/>)
        expect(wrapper).toBeDefined();
        expect(wrapper.find('button')).toBeDefined();
    });
});