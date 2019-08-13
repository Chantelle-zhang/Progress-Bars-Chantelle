import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPersonsDataWithLoadingState} from "../store/ActionCreators/actions";
import {
    CHANGE_PROGRESS
} from "../store/ActionCreators/actionTypes";
import Bars from "./Bars";
import ButtonGroup from "./ButtonGroup";
import Select from "./Select";


class HomePage extends Component {
    constructor() {
        super();
        this.onClick= this.onClick.bind(this);
    }


    componentDidMount() {
        const url = '/bars';
        this.props.getPersonsDataWithLoadingState(url);
    }

    onClick(increment){
      const {barOption,dispatch,limit}=this.props;
        dispatch({
            type: CHANGE_PROGRESS,
            payload:{
                increment:increment,
                barOption:barOption,
                limit:limit
            }

        })

    }

    render() {
        const {isLoading, buttons, bars} = this.props;

        return (
            isLoading === true ? <img src='/spinner.gif' alt='loading'/> :
                <div>
                 <Bars bars={bars}/>
                 <Select optionList={bars}/>
                 <ButtonGroup buttons={buttons} onClick={this.onClick}/>
                </div>

        );
    }
}


const mapStateToProps = state => ({
    isLoading: state.isLoading,
    barOption: state.optionValue,
    buttons:state.buttons,
    bars:state.bars,
    limit:state.limit

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


