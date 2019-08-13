import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Container from "react-bootstrap/Container";
import {getPersonsDataWithLoadingState} from "../store/ActionCreators/actions";
import {CHANGE_PROGRESS} from "../store/ActionCreators/actionTypes";
import Bars from "./Bars";
import ButtonGroup from "./ButtonGroup";
import Select from "./Select";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export class HomePage extends Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }


    componentDidMount() {
        const url = '/bars';
        this.props.getPersonsDataWithLoadingState(url);
    }

    onClick(increment) {
        const {barOption, dispatch, limit} = this.props;
        dispatch({
            type: CHANGE_PROGRESS,
            payload: {
                increment: increment,
                barOption: barOption,
                limit: limit
            }

        })

    }

    render() {
        const {isLoading, buttons, bars} = this.props;

        return (
            isLoading === true ? <img src='/spinner.gif' alt='loading'/> :
                <Container>
                    <div className='wrapper'>
                        <Bars bars={bars}/>
                        <Row>
                            <Col sm={4}>
                                <Select optionList={bars}/>
                            </Col>
                            <Col sm={8}>
                                <ButtonGroup buttons={buttons} onClick={this.onClick}/>
                            </Col>
                        </Row>
                    </div>
                </Container>

        );
    }
}


const mapStateToProps = state => ({
    isLoading: state.isLoading,
    barOption: state.optionValue,
    buttons: state.buttons,
    bars: state.bars,
    limit: state.limit

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


