import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import * as ACTIONS from '../store/actions'
import axios from 'axios'
import moment from 'moment'

function StripeButton(props) {
    const onToken = (token,addresses)=>{
        axios.post('/save-purchase',{
            amount:props.menu.total,
            items: props.menu.cart,
            date: moment(Date.now()).format('LLLL')
        }).then(res=>{
            props.userData(res.data)
            props.order()
        })
    }
    return (
            <StripeCheckout
            stripeKey="pk_test_51GxXTwJWnlXzpGEmHhKz3nGdCrzRjY8QE4fuYMo6CNYAuJXIQCDMy2LXCAVyTbME9zrYK60HxAjBEaE9ulvYSRJ700jdk4z5x2"
            token={onToken}
            name="BiteToHome"
            description="Fresh Food"
            image= 'https://i.imgur.com/YtRT1Kq.png'
            ComponentClass="div"
            panelLabel={`Pay`}
            amount={props.menu.total * 100} 
            currency="USD"

            >
            <Button className='stripe_button' style={{'color':'white','backgroundColor':'black'}} variant="outlined">
                Pay With Card
            </Button>
            </StripeCheckout>
    )
}

const mapStateToProps = state =>{
    return {
        menu: state.menu
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        order: ()=> dispatch(ACTIONS.order()),
        userData: (user)=> dispatch(ACTIONS.userData(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StripeButton);
