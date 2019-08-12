import React from 'react';
import PropTypes from 'prop-types';
import {
    SET_OPTION_VALUE
} from "../store/ActionCreators/actionTypes";
import {connect} from 'react-redux';


const Select = ({optionList,optionValue,dispatch}) => {

    const onChange = e => {
      dispatch({
            type: SET_OPTION_VALUE,
            optionValue:e.target.value
        })
    };

    return (
        <div className='form-group'>
            <select
                name='barOption'
                value={optionValue}
                onChange={e => onChange(e)}
                className='form-control'
            >


                {optionList.map((option,index) =>
                    <option value={option} key={option}>#bar {index+1}</option>)

                }

            </select>

        </div>
    )
}

Select.propTypes = {
    optionList:PropTypes.array

};

const mapStateToProps = state => ({
    optionValue:state.optionValue

});

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch,
});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)( Select );