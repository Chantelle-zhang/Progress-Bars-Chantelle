import React from 'react';
import { shallow } from 'enzyme';
import {Select} from './Select';

describe('Check Select component', () => {

    it('number of dropdown options >=1', () => {
        const optionList = [1, 2, 3];
        const wrapper = shallow(<Select optionList={optionList}/>);
        const options = wrapper.find("[data-test='option']")
        expect(options.length).toBe(optionList.length);

    });

})

