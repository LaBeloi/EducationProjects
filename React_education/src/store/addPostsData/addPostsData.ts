import { ActionCreator } from "redux";
import { IResponseObject, PostsDataAction } from "../postsData/postsData";

export const ADD_POSTS_DATA = "ADD_POSTS_DATA";
export type AddPostsDataAction = {
    type: typeof ADD_POSTS_DATA;
    postsData: IResponseObject[];
}
export const addPostsData:ActionCreator<AddPostsDataAction> = (postsData:IResponseObject[]) => ({
    type: ADD_POSTS_DATA,
    postsData,
})