import { ActionCreator, AnyAction, Reducer } from "redux";
import { ADD_POSTS_DATA } from "./addPostsData/addPostsData";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
import { IResponseObject, POSTS_DATA } from "./postsData/postsData";

export type RootState = {
    token: string,
    modalCommentText: string,
    me: MeState,
    postsData: IResponseObject[]
}

export const initialState:RootState = {
    token: '',
    modalCommentText: '',
    me: {
        loading: false,
        error: '',
        data: {}
    },
    postsData: [ { title: '', name: '', published: 0, likes: 0, key: '' } ]
}

export const SET_TOKEN = 'SET_TOKEN';
export const setToken: ActionCreator<AnyAction> = (token) => ({
    type: SET_TOKEN,
    token,
})

export const UPDATE_MODAL_COMMENT = 'UPDATE_MODAL_COMMENT';
export const updateModalComment: ActionCreator<AnyAction> = (modalText) => ({
    type: UPDATE_MODAL_COMMENT,
    modalText,
})
export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case UPDATE_MODAL_COMMENT:
            return {
                ...state,
                modalCommentText: action.modalText
            }
        case ME_REQUEST:
        case ME_REQUEST_ERROR:
        case ME_REQUEST_SUCCESS:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        case POSTS_DATA:
            return {
                ...state,
                postsData: action.postsData
            }
        case ADD_POSTS_DATA:
            return {
                ...state,
                postsData: state.postsData.length > 1 ? [...state.postsData, ...action.postsData] : action.postsData
            }
        default:
            return state;
    }
}