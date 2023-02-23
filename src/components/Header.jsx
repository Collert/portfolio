import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav>
                <Link to='/' className='curpage'>Work</Link>
                <Link to='/' className=''>Me</Link>
            </nav>
        </header>
    )
}