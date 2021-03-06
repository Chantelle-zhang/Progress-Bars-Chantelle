import React from 'react';
import { shallow } from 'enzyme';
import Bars from './Bars';

describe('Check Bars component', () => {

    it('Number of bars >=1', () => {
        const barData = [62, 45, 62];
        const wrapper = shallow(<Bars bars={barData}/>);
        const barItem = wrapper.find("[data-test='bar']")
        expect(barItem.length).toBe(barData.length);

    });

})