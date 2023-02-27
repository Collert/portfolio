import React from 'react'
import './SFStudio.css'
import './common.css'

export default function SFStudio() {
    return (
        <main className='project'>
            <section className='heading sfstudio'>
                <div></div>
                <div className='buzz-words'>
                    <div>
                        <h1><span className='reveal-text'>Sweat today, shine tomorrow</span></h1>
                        <h3><span className='reveal-text'>Full Stack Engineer</span></h3>
                        <p><span className='reveal-text'>
                            A space a user-friendly unified fitness studio website that allows members to easily create an account and keep track of their membership status. With the ability to book spots in group classes and 1:1 sessions, members can easily plan their fitness routine. The website also provides pricing information for memberships, and allows staff to create and manage group classes, respond to 1:1 session requests, and track attendance.
                        </span></p>
                        <h4><span className='reveal-text'>Designed for SFStudio in Ternopil, Ukraine</span></h4>
                    </div>
                    <div className='bot'><small><span className='reveal-text'>Scroll down</span></small></div>
                </div>
            </section>
        </main>)
}