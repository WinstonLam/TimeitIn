import { ActionTypes as types } from "../../actions/actionTypes";
import { Action } from "../interfaces";

export const hoursYearlyReducer = (state: any[] = [], action: Action) => {
    switch (action.type) {
        case types.FETCH_YEARLY_HOURS:
            return [...action.payload];
        default:
            return state;
    }
}

export const hoursMonthlyReducer = (state: any[] = [], action: Action) => {
    switch (action.type) {
        case types.FETCH_MONTHLY_HOURS:
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




