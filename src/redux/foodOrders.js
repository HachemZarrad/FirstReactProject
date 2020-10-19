import * as ActionTypes from './ActionTypes';

export const FoodOrders = (state  = { isLoading: true,
                                    errMess: null,
                                    foodOrders:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FOOD_ORDERS:
        return {...state, isLoading: false, errMess: null, foodOrders: action.payload};

        case ActionTypes.FOOD_ORDERS_LOADING:
            return {...state, isLoading: true, errMess: null, foodOrders: []}

        case ActionTypes.FOOD_ORDERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
    }
};