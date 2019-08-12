import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPersonsDataWithLoadingState} from "../store/ActionCreators/actions";
import {

} from "../store/ActionCreators/actionTypes";
import Bars from "./Bars";
import ButtonGroup from "./ButtonGroup";
import Select from "./Select";




class HomePage extends Component {
    constructor() {
        super();

    }


    componentDidMount() {
        const url = '/bars';
        this.props.getPersonsDataWithLoadingState(url);
    }



    render() {
        const {isLoading, buttons, bars} = this.props;

        return (
            isLoading === true ? <img src='/spinner.gif' alt='loading'/> :
                <div>
                 <Bars bars={bars}/>
                 <Select optionList={bars}/>
                 <ButtonGroup buttons={buttons}/>
                </div>

        );
    }
}


const mapStateToProps = state => ({
    isLoading: state.isLoading,
    barOption: state.optionValue,
    buttons:state.buttons,
    bars:state.bars

});

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch,
    getPersonsDataWithLoadingState: (url) =>
        dispatch(getPersonsDataWithLoadingState(url))
});

ButtonGroup.propTypes = {

    isLoading: PropTypes.bool,
    onClick: PropTypes.func,

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);


