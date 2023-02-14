import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import HeadMeta from './HeadMeta'

const List = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    function dataget() {
        axios.get('/api/hello').then((res) => setData(res.data))
    }
    useEffect(dataget, [])
    function dataDelete(did) {
        axios.delete('/api/hello', { data: { id: did } }).then((res) => setData(res.data))

    }

    if (data.length == 0) return (<>로딩중.....!<Link href="/src/Write"> 글쓰기 </Link></>)
    return (
        <>
            <article>
                <h2>List</h2>
                <ul>
                    {
                        data.map(obj => (
                            <li key={obj.id}>
                                {obj.name} / {obj.email} / {obj.tel}
                                <button onClick={() => router.push({ pathname: '/src/Update', query: obj })}>수정</button>
                                <button onClick={() => dataDelete(obj.id)}>삭제</button>
                            </li>
                        ))
                    }
                </ul>
            </article>
            <Link href="/src/Write"> 글쓰기 </Link>
        </>
    )
}

export default List