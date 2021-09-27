import { ActionCreator } from "redux";

export interface IResponseObject {
    title: string,
    name: string,
    published: number,
    likes: number,
    key: string,
}

export const POSTS_DATA = 'POSTS_DATA';
export type PostsDataAction = {
    type: typeof POSTS_DATA;
    postsData: IResponseObject[];
}
export const savePostsData:ActionCreator<PostsDataAction> = (postsData:IResponseObject[]) => ({
    type: POSTS_DATA,
    postsData,
})
