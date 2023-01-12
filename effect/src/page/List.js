import React from 'react'
import {Link} from 'react-router-dom'
const List = ({content}) => {
  return (
    <div>
        <ul>
             <li>아이디 : {content && content.id}</li>
            {/*<li>글 : {content.value}</li> */}
        </ul>
        <Link to="/Write">글쓰기</Link>

    </div>
  )
}

export default List