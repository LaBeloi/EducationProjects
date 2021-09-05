import React from "react";
import { usePostsData } from "../../hooks/usePostsData";

interface ICreateContext {
    title?: string,
    name?: string,
    published?: number,
    likes?: number,
    key?: string,
}

type TCreateContext = ICreateContext[]

export const PostsContext = React.createContext<TCreateContext>([])

export function PostsContextProvider( { children }: { children: React.ReactNode } ) {
    const [data] = usePostsData();
    return (
        <PostsContext.Provider value={data}>
            { children }
        </PostsContext.Provider>
    )
}