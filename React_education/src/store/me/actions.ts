import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IUserData } from "../../hooks/useUserData";
import { RootState } from "../store";

export const ME_REQUEST = 'ME_REQUEST';
export type MeRequestActions = {
    type: typeof ME_REQUEST;
}
export const meRequest:ActionCreator<MeRequestActions> = () => ({
    type: ME_REQUEST,
})


export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
export type MeRequestSuccessActions = {
    type: typeof ME_REQUEST_SUCCESS;
    data: IUserData
}
export const meRequestSuccess:ActionCreator<MeRequestSuccessActions> = (data:IUserData) => ({
    type: ME_REQUEST_SUCCESS,
    data, 
})


export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
export type MeRequestErrorActions = {
    type: typeof ME_REQUEST_ERROR;
    error: string
}
export const meRequestError:ActionCreator<MeRequestErrorActions> = (error:string) => ({
    type: ME_REQUEST_ERROR,
    error,
})

export const meRequestAsync= ():ThunkAction<void, RootState, unknown, Action<string>> => (dispatch ,getState) => {
     dispatch(meRequest());
        axios.get('https://oauth.reddit.com/api/v1/me', {
            headers: { Authorization: `bearer ${getState().token}` }
        })
            .then((resp) => {
                const userData = resp.data;
                dispatch(meRequestSuccess({ name:userData.name, iconImg: userData.icon_img }));
            })
            .catch((err) => {
                console.log(err);
                dispatch(meRequestError(String(err)));
            });
}