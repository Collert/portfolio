import React from 'react'
import './RidnaLibrary.css'
import '../common.css'

export default function RidnaLibrary() {
    return (
        <main className='project'>
            <section className='heading righty ridna-library'>
                <div></div>
                <div className='buzz-words'>
                    <div>
                        <h1><span className='reveal-text'>Shevchenko's words to homes in Vancouver</span></h1>
                        <h3><span className='reveal-text'>Full Stack Engineer</span></h3>
                        <p><span className='reveal-text'>
                            A Ukrainian library website, where customers can create their own account and borrow books online. Readers can also write reviews for books they've read and share their thoughts with the community. The staff is able to help customers manage book and account statuses to ensure a smooth experience.
                        </span></p>
                        <h4><span className='reveal-text'>Designed for Ridne Slovo in New Westminster, BC</span></h4>
                    </div>
                    <div className='bot'><small><span className='reveal-text'>Scroll down</span></small></div>
                </div>
            </section>
        </main>)
}