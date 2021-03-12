import React from 'react'


function Home() {
    return (
        <div id='home'>
            <img src={'./static/react/images/cake3.jpg'} className='left_background'/>
            <img src={'./static/react/images/toa12.jpg'} className='right_background'/>
            <footer>
                    <div className='terms'>
                        <a href='#home'>Terms of Service</a>
                        <a href='#home'>Privacy and Policy</a>
                        <p>© 2021 BiteToHome</p>
                    </div>
                    <div className='terms'>
                        <a href='#home'>8154 East Mayflower Ave.Brooklyn, NY 11224</a>
                        <p>New York</p>
                    </div>
                    <div className='terms'>
                        <a href='#home'>(999)-999-9999</a>
                        <p>bitetohome@tax.co</p>
                    </div>
            </footer>
        </div>
    )
}


export default Home;