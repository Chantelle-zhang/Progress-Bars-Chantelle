import React from 'react';
import { shallow } from 'enzyme';
import {HomePage} from './HomePage';
import {getPersonsDataWithLoadingState} from "../store/ActionCreators/actions";


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


