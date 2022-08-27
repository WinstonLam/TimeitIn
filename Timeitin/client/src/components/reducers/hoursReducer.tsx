import { ActionTypes as types } from "../../actions/actionTypes";
import { Action } from "../interfaces";


export const hoursRequestedReducer = (state: any[] = [], action: Action) => {
    switch (action.type) {
        case types.FETCH_REQUESTED_HOURS:
            return [...action.payload];
        default:
            return state;
    }
}

export const hoursDailyReducer = (state: any[] = [], action: Action) => {
    switch (action.type) {
        case types.FETCH_DAILY_HOURS:
            return [...action.payload];
        default:
            return state;

    }
}




