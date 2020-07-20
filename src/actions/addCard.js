import {
    CARD_POST,
    CARD_POST_SUCCESS,
    CARD_POST_FAILURE
} from './ActionTypes';
import axios from 'axios';

/* MEMO POST */
export function cardPostRequest(contents) {
    return (dispatch) => {
        // inform TEST POST API is starting
        dispatch(cardPost());

        return axios.post('/test/', { contents })
        .then((response) => {            
            dispatch(cardPostSuccess());
            dispatch(cardPost());
        }).catch((error) => {            
            dispatch(cardPostFailure(error.response.data.code));
        });
    };
}

export function cardPost() {
    return {
        type: CARD_POST
    };
}

export function cardPostSuccess() {
    return {
        type: CARD_POST_SUCCESS
    };
}

export function cardPostFailure(error) {
    return {
        type: CARD_POST_FAILURE,
        error
    };
}