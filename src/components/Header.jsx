import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <header>
            <nav>
                <Link to='/' className={props.url === '/' ? 'curpage' : ''}>Work</Link>
                <Link to='/me' className={props.url === '/me' ? 'curpage' : ''}>Me</Link>
            </nav>
        </header>
    )
}