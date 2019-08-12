import axios from 'axios';
import {
    LOADING_END,
    LOADING_START,
    SAVE_INITIAL_DATA_TO_STORE,
} from './actionTypes';


export const fetchData = (url) => async (dispatch) => {

    try {

        const res = await axios.get(url);

        dispatch({
            type: SAVE_INITIAL_DATA_TO_STORE,
            data: res.data
        });

    } catch (err) {
        console.log(err);
    }
};

export const getPersonsDataWithLoadingState = (url) => async (dispatch) => {

    dispatch({
        type: LOADING_START
    });

    await dispatch(fetchData(url));

    dispatch({
        type: LOADING_END
    });

};