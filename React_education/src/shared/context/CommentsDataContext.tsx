import React from "react";
import { useParams } from "react-router";
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
}

export const CommentsDataContext = React.createContext<IValue>({})

export function CommentsDataContextProvider({children}:ICommentsDataContextProvider) {
    const id:{postId:string} = useParams()
    const fooId = id.postId.substring(1);
    const data = useCommentsData(fooId)
    return(
        <CommentsDataContext.Provider value={data}>
            { children }
        </CommentsDataContext.Provider>
    )
}