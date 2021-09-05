import React from "react";
import { useCommentsData } from "../../hooks/useCommentsData";

interface IPost {
    title?: string,
    selftext?: string
}

interface IValue {
    post?: IPost,
    comments?: object[],
}

interface ICommentsDataContextProvider {
    children:React.ReactNode,
    postId:string
}

export const CommentsDataContext = React.createContext<IValue>({})

export function CommentsDataContextProvider({children, postId}:ICommentsDataContextProvider) {
    const data = useCommentsData(postId)
    return(
        <CommentsDataContext.Provider value={data}>
            { children }
        </CommentsDataContext.Provider>
    )
}