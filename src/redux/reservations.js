import * as ActionTypes from './ActionTypes';

export const Reservations = (state  = { isLoading: true,
                                    errMess: null,
                                    reservations:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RESERVATIONS:
        return {...state, isLoading: false, errMess: null, reservations: action.payload};

        case ActionTypes.RESERVATIONS_LOADING:
            return {...state, isLoading: true, errMess: null, reservations: []}

        case ActionTypes.RESERVATIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
    }
};