import React from 'react'

function About() {
    return (
        <div id='about'>
            <div className='content_container'>
                <div><img src={'./static/react/images/toa22.png'}></img></div>
                <div className='text_container'>
                    <span>PHILOSOPHY</span>
                    <h2>Only the best for our customers</h2>
                    <p>Lorem ipsum dolor sit amet, in qui mundi denique. Pri in mundi legendos. Graeci prompta persecuti mel eu, ei duo sonet ignota civibus.</p>
                    <a href='#about'>READ MORE</a>
                </div>
                <div><img src={'./static/react/images/toa24.png'}></img></div>
                <div className='text_container'> 
                    <span>FRESH FOOD</span>
                    <h2>All of our dishes are made on the same day</h2>
                    <p>Lorem ipsum dolor sit amet, in qui mundi denique. Pri in mundi legendos. Graeci prompta persecuti mel eu, ei duo sonet ignota civibus.</p>
                    <a href='#about'>READ MORE</a>
                    </div>
                <div><img src={'./static/react/images/toa26.png'}></img></div>
                <div className='text_container'>
                    <span>HISTORY</span>
                    <h2>Created to make your life easy and tasty</h2>
                    <p>Lorem ipsum dolor sit amet, in qui mundi denique. Pri in mundi legendos. Graeci prompta persecuti mel eu, ei duo sonet ignota civibus.</p>
                    <a  href='#about'>READ MORE</a>
                </div>
            </div>
        </div>
    )
}

export default About;
