import React, { useContext } from "react";
import { useCommentsData } from "../../hooks/useCommentsData";
import { CommentsDataContext } from "../../shared/context/CommentsDataContext";
import { Comment } from "./Comment/Comment";
import styles from './CommentsPost.css';

interface IData {
    children: object[]
}

interface IReplies {
    data: IData
}

interface IComment {
    author?: string,
    created?: number,
    body?: string,
    replies?: IReplies,
    data?: IComment
}

interface ICommentsPost {
    recursionData?: object[]
}

export function CommentsPost( {recursionData}:ICommentsPost ) {
    const data = useContext(CommentsDataContext)
    console.log(data)
    return (
        <div>
            { recursionData || recursionData !== undefined
                ? 
                recursionData.map((item:IComment) => 
                <Comment 
                    key={recursionData.indexOf(item)}
                    body={item.data!.body}
                    created={item.data!.created}
                    author={item.data!.author}
                    children={item.data!.replies instanceof Object ? item.data?.replies!.data.children : null}
                />)
                : 
                data.comments?.length! > 0 
                ?
                data.comments?.map((item:IComment) => 
                <Comment 
                    key={data.comments?.indexOf(item)} 
                    body={item.body} 
                    created={item.created} 
                    author={item.author} 
                    children={item.replies instanceof Object ? item.replies!.data.children : null } 
                />)
                :
                'Комментариев нету :), вы можете стать первыми!'
            }
        </div>
    );
}