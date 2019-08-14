import React from 'react';
import { shallow } from 'enzyme';
import {HomePage} from './HomePage';
import {getPersonsDataWithLoadingState} from "../store/ActionCreators/actions";
import Bars from "./Bars";
import Select from "./Select";
import ButtonGroup from "./ButtonGroup";


    it('Check Homepage componentDidMount()', () => {
        const props = {
            getPersonsDataWithLoadingState
        };
        const wrapper = shallow(<HomePage {...props}/>)
        const instance = wrapper.instance();
        const spy=jest.spyOn(instance, 'componentDidMount');
        instance.componentDidMount();
        expect(spy).toHaveBeenCalled;
    });


it('Check Homepage component has one bars component,one Select component and one ButtonGroup component', () =>
{
    const props = {
        getPersonsDataWithLoadingState
    };
    const wrapper = shallow(<HomePage {...props}/>)
    const bar=wrapper.find(Bars)
    const buttonGroup=wrapper.find(ButtonGroup)
    const select=wrapper.find(Select)
    expect(bar.length).toBe(1);
    expect(buttonGroup.length).toBe(1);
    expect(select.length).toBe(1);

});

