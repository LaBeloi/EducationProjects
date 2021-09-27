import { useEffect } from "react";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState, setToken } from "../store";

export const saveToken= ():ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    if (localStorage.getItem("reddit-token") || window.__token__ && window.__token__ !== 'undefined') {
        const token =  localStorage.getItem("reddit-token") || window.__token__;
        dispatch(setToken(token));
        if(token) {
            localStorage.setItem("reddit-token", token);
        }
    };
}
