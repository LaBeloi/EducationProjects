import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";

interface IResponseObject {
    title?: string,
    name?: string,
    published?: number,
    likes?: number,
    key?: string,
}

export function usePostsData() {
    const [list, setList] = useState<IResponseObject[]>([]);
    const token = useContext(tokenContext);
    useEffect(() => {
        if (token) {
            axios.get('https://oauth.reddit.com/best', {
                headers: { Authorization: `bearer ${token}` },
                params: {
                    limit: 5,
                }
            })
            .then((res) => {
                const data = res.data.data.children;
                const dataArr = [];
                for (let i of data) {
                    dataArr.push({title: i.data.title, name: i.data.author, published: i.data.created, likes: i.data.score, key: i.data.id})
                }
                return dataArr
            })
            .then((dataArr) => {setList(dataArr)})
        }
    }, [token])
    return [list]
}