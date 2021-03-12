import { TextField,Button } from '@material-ui/core';
import React from 'react'
import MenuNavigation from '../components/MenuComponents/MenuNavigation'

function Signup() {
    return (
        <>
        <MenuNavigation/>
        <div className='signup_container'>
            <form action='/create-user' method='POST'>
                <h2>Create Account</h2>
                <TextField required name='username' type='email' label="Email..." variant="outlined" />
                <br></br>
                <TextField required name='password' type='password'  label="Password..." variant="outlined" />
                <br></br>
                <TextField required name='name' type='text' label='Name...' variant='outlined'></TextField>
                <br></br>
                <Button type='submit' variant="outlined">Signup</Button>
            </form>
        </div>
        </>
    )
}

export default Signup;
