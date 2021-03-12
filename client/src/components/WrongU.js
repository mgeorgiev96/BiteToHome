import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

function WrongU() {
    return (
        <div className='error_page'>
            <div className='message_container'>
                <img src={'./static/react/images/404.png'} ></img>
                <h1>Ooops, the email is already in use :{'('}</h1>
                <Button style={{'color':'white','backgroundColor':'black'}} variant='outlined'>
                    <Link style={{'textDecoration':'none'}} to='/signup'>BACK</Link>
                </Button>
            </div>
        </div>
    )
}

export default WrongU;
