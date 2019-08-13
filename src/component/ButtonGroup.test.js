import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from './ButtonGroup';


it('Number of buttons >=1', () => {
    const buttonData=[10,38,-13,-18];
    const wrapper=shallow(<ButtonGroup buttons={buttonData}/>);
    const buttonGroup=wrapper.find("[data-test='button']")
    expect(buttonGroup.length).toBe(buttonData.length);


});

it('Test click event', () => {
    const buttonData=[10,38,-13,-18];
    const mockCallBack = jest.fn();
    const index=1
    const wrapper= shallow((<ButtonGroup buttons={buttonData} onClick={mockCallBack}/>));
       wrapper.find("[data-test='button']").at(index).simulate('click');
       expect(mockCallBack).toHaveBeenCalled();
});