import {
    LOADING_START,
    LOADING_END,
    SET_OPTION_VALUE,
    SAVE_INITIAL_DATA_TO_STORE
} from './ActionCreators/actionTypes'

export const isLoading = (state = null, action) => {

    const {type} = action;

    switch (type) {

        case LOADING_START:
            return true;

        case  LOADING_END:
            return false;

        default:
            return state;
    }
}

export const buttons = (state = [], action) => {

    const {type} = action;

    switch (type) {

        case SAVE_INITIAL_DATA_TO_STORE:
            return action.data.buttons;


        default:
            return state;
    }
}

export const bars = (state = [], action) => {
    const {type} = action;

    switch (type) {

        case SAVE_INITIAL_DATA_TO_STORE:
            return action.data.bars;

        default:
            return state;
    }
}

export const  optionValue  = (state = '#bar 1', action) => {

    const {type} = action;

    switch (type) {

        case SET_OPTION_VALUE :
            return action.optionValue  ;


        default:
            return state;
    }
}