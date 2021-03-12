import React from 'react'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import MenuNavigation from './MenuNavigation'
import uniqid from 'uniqid'
import * as ACTIONS from '../../store/actions'


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    }
  }));

function Pizza(props) {
    const classes = useStyles();

    return (
        <>
        <MenuNavigation/>
        <div className='food_container'>
            {props.menu.menu[0].items.map(item=>{
                return  <Card key={uniqid()} className='pizza_item'>
                <CardMedia
                className={classes.media}
                title={item.name}
                image={item.image}
              />
              <h3>{item.name}</h3>
              <h5>${item.price}</h5>
              {item.ingredients.map((value,i)=>i === item.ingredients.length - 1 ? <span key={uniqid()}>{value}</span> : <span key={uniqid()}>{value + ', '}</span>)}
              <div className='food_actions'>
                  <span><strong>Size - 12"</strong></span>
                  <i className="fas fa-shopping-cart" onClick={()=>props.addToCart(item.price,{name:item.name,price: item.price,image:item.image,qty: 1})}></i>
               </div>
            </Card>
            })}
        </div>
        </>
    )
}

const mapStateToProps = state=>{
    return {
        menu: state.menu
    }
}

const mapDispatchToProps = dispatch =>{
  return {
    addToCart: (total,item)=> dispatch(ACTIONS.addToCart(total,item))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pizza);
