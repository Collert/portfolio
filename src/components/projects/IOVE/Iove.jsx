import React from 'react'
import './Iove.css'
import './extra/swipe.css'
import '../common.css'
import CardStack from './extra/CardStack'

export default function Iove() {
    return (
    <main className='project iove'>
        <section className='heading righty'>
            <div></div>
            <div className='buzz-words'>
                <div>
                    <h1><span className='reveal-text'>The algorithm for finding love</span></h1>
                    <h3><span className='reveal-text'>Full Stack Engineer</span></h3>
                    <p><span className='reveal-text'>
                        A dating app for programmers, designed to attract people with your code, not your looks.
                    </span></p>
                    <h4><span className='reveal-text'>Designed as a passion project</span></h4>
                </div>
                <div className='bot'><small><span className='reveal-text'>Scroll down</span></small></div>
            </div>
        </section>
        <section className='lefty'>
            <div className='swipe'>
                <CardStack/>
            </div>
            <div className='sig-text'>
                <h2>Customize your profile</h2>
                <p>
                    Give your card stack a unique look by customizing it to reflect you as a programmer.
                    Add a picture of yourself, your favourite hobby, and favourite music genre. Don't forget to 
                    attract attention by describing yourself in the bio card and well as adding information about your 
                    lifestyle and intentions on the app. And last but not least, show off a cool algorithm you wrote in the code
                    card!
                </p>
            </div>
        </section>
        <section className='righty'>
            <div className='sig-text'>
                <h2>Real time chat</h2>
                <p>
                    Chat with your matches in real time.
                    Now, I know this might not sound very impressive in {new Date().toLocaleDateString('en-US', {month:'long'})} of {new Date().toLocaleDateString('en-US', {year:'numeric'})}
                    but it was my first time dipping my toes into WebSockets and my first successful implementation and deployment of a Redis WebSocket server
                    and my HTML server on the same port.
                </p>
            </div>
            <div className='img-container'>
                <img src='./assets/projectPages/IOVE/chat.gif' alt='Demonstration of the real time chat feature'/>
            </div>
        </section>
        <section className='lefty'>
            <div className='img-container'>
                <img src='./assets/projectPages/IOVE/suggestions.gif' alt='Demonstration of the real time chat feature'/>
            </div>
            <div className='sig-text'>
                <h2>No rizz? No problem!</h2>
                <p>
                    We all get stuck sometimes, not sure how to engage a newly formed connection. Thanks to Chat GPT, as well as bright minds of <a href='https://www.reddit.com/r/ProgrammerHumor/'>r/ProgrammerHumor</a>,
                    the struggle is over. With over 100 programming related pickup lines and openers, the users will never be stuck staring at a blank screen again!
                </p>
            </div>
        </section>
        <section>
            <div className='img-container full'>
                <img src='./assets/projectPages/IOVE/swipe.gif' alt='Demonstration of the real time chat feature'/>
            </div>
        </section>
    </main>)
}