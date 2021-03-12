import React from 'react'
import { Button,TextField } from '@material-ui/core'
import {connect} from 'react-redux'
import * as ACTIONS from '../store/actions'
import uniqid from 'uniqid'
import {Link} from 'react-router-dom'
import StripeCheckout from './StripeButton'
import axios from 'axios'

function Order(props) {
  const removeItem = (total,item)=>{
    props.removeCart(total,item)
  }
  const logUser = ()=>{
    var username = document.getElementById('username')
    var password = document.getElementById('password')
    axios.post('/login',{username:username.value,password:password.value}).then(res=>{
      if(res.data === 'password'){
        password.style.border = '1px solid red'
      }else if(res.data === 'username'){
        username.style.border = '1px solid red'
      }else{
        props.userData(res.data)
      }
    })
  }
    return (
        <div id='order'>
            <div className='form_container'>
                <div className='cart'>
                  <h4><i className="fas fa-shopping-basket"></i> Basket: ${props.menu.total}</h4>
                  <ul>
                    <li>
                      <img style={{'opacity':0}} src=''></img>
                      <p>Product</p>
                      <p>Qty</p>
                      <p>Price</p>
                      <i style={{'opacity':0}} className="fas fa-trash-alt"></i>
                    </li>
                  </ul>
                    <ul className='cart_items'>
                      {props.menu.cart.map((value,i)=>{
                        return <li key={uniqid()}>
                          <img src={value.image}></img>
                          <p>{value.name}</p>
                          <p>{value.qty}</p>
                          <p>${value.price *  value.qty}</p>
                          <i onClick={() => removeItem(value.price * value.qty,{name:value.name})} className="fas fa-trash-alt"></i>
                        </li>
                      })}
                    </ul>
                </div>
                {(()=>{
                  if(props.menu.user.name){
                    return <div  key={uniqid()} className='user_container'>
                      <h2>Welcome,<br></br>{props.menu.user.name}</h2>
                      <Link to='/history'>View Purchase History</Link>
                      <br></br>
                      <StripeCheckout/>
                    </div>
                  }else{
                    return <div  key={uniqid()} className='user_container'>
                        <h2>Login to order.</h2>
                        <h4>No account? Click <Link to='/signup' className='page_button'>HERE</Link>.</h4>
                        <form onSubmit={(e)=> e.preventDefault()}>
                            <TextField required id='username' name='username' type='email' label="Email..." variant="outlined" onSubmit={(e)=> e.preventDefault()} />
                            <br></br>
                            <TextField required id='password' name='password' type='password'  label="Password..." variant="outlined" />
                            <br></br>
                            <Button  onClick={logUser} type='submit' variant="outlined">Login</Button>
                        </form>
                  </div>
                  }
                })()}
            </div>
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
    removeCart: (total,item)=> dispatch(ACTIONS.removeCart(total,item)),
    userData: (user)=> dispatch(ACTIONS.userData(user))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Order);
