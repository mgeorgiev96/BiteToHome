import React,{useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import * as ACTIONS from '../store/actions'

function Navigation(props) {

    useEffect(()=>{
        axios.get('/info').then(res=>{
            props.userData(res.data)
        })
    },[])
    return (
        <div className='navbar'>
            <img className='logo_image' src={'./static/react/images/logo.png'}></img>
            <ul className='home_navbar'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#menu'>Menu</a></li>
                <li><a href='#order'>Order</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        menu: state.menu
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        userData:(user)=> dispatch(ACTIONS.userData(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
