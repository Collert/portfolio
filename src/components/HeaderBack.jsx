import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='back'>
            <nav>
                <Link to='/' className='curpage'>Back</Link>
            </nav>
        </header>
    )
}