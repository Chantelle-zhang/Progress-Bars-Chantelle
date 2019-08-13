import {
    LOADING_START,
    LOADING_END,
    SET_OPTION_VALUE,
    SAVE_INITIAL_DATA_TO_STORE,
    CHANGE_PROGRESS
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

        case CHANGE_PROGRESS:
            const newState=[...state];
            const index=action.payload.barOption;
            let barValue=newState[index];
            barValue+=action.payload.increment;
            if(barValue<0){
                newState[index]=0
            }
            else if(barValue>action.payload.limit) {
                newState[index]=action.payload.limit
            } else
                newState[index]=barValue

            return newState;

        default:
            return state;
    }
}

export const  optionValue  = (state = '0', action) => {

    const {type} = action;

    switch (type) {

        case SET_OPTION_VALUE :
            return action.optionValue  ;


        default:
            return state;
    }
}

export const  limit = (state ='100', action) => {

    const {type} = action;

    switch (type) {

            case SAVE_INITIAL_DATA_TO_STORE:
            return action.data.limit;

        default:
            return state;
    }
}