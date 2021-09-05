import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../shared/context/tokenContext";

interface IComments {
    body?: string
}

interface IResult {
    post?: object,
    comments?: IComments[]
}

export function useCommentsData(postId:string) {
    const [data, setData] = useState<IResult>({});
    const token = useContext(tokenContext);
    useEffect(() => {
        axios.get(`https://oauth.reddit.com/comments/${postId}`, {
            headers: { Authorization: `bearer ${token}` },
        })
        .then((res) => {
            const result:IResult = {};
            result.post = res.data[0].data.children[0].data;
            const postComments = res.data[1].data.children;
            const comments = []
            for (let i of postComments) {
                comments.push(i.data);
            }
            result.comments = comments;
            // console.log(result)
            return result
        })
        .then((result) => setData(result))
    }, [token])
    return data
}