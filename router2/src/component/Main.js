import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Main = () => {
    return (

        <div className='link-box'>
            <Link to="/Movies">Movies</Link>
            <Link to="/Music">Music</Link>
            <Link to="/Apps">Apps</Link>
            <Link to="/Software">Software</Link>
        </div>

    )
}

export default Main