import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";

interface IResponseObject {
    title?: string,
    name?: string,
    published?: number,
    likes?: number,
    key?: string,
    preview?: string,
}

export function usePostsData() {
    const [list, setList] = useState<IResponseObject[]>([]);
    const token = useContext(tokenContext);
    useEffect(() => {
        if (token) {
            axios.get('https://oauth.reddit.com/best', {
                headers: { Authorization: `bearer ${token}` },
                params: {
                    limit: 100,
                }
            })
            .then((res) => {
                const data = res.data.data.children;
                const dataArr = [];
                for (let i of data) {
                    dataArr.push({title: i.data.title, name: i.data.author_fullname, published: i.data.created, likes: i.data.score, key: i.data.id, preview: i.data.thumbnail})
                }
                return dataArr
            })
            .then((dataArr) => {setList(dataArr)})
        }
    }, [token])
    return [list]
}