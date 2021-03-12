import React from 'react'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import MenuNavigation from './MenuNavigation'
import uniqid from 'uniqid'
import * as ACTIONS from '../../store/actions'
import Popup from '../Popup'


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    }
  }));

function Sides(props) {
    const classes = useStyles();

    return (
        <>
        <MenuNavigation/>
        <div className='food_container'>
            {props.menu.menu[1].items.map(item=>{
                return  <Card key={uniqid()} className='food_item'>
                <CardMedia
                className={classes.media}
                title={item.name}
                image={item.image}
              />
              <h3>{item.name}</h3>
              <h5>${item.price}</h5>
              
              <div className='food_actions'>
                  <span><strong>{item.size}</strong></span>
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

export default connect(mapStateToProps,mapDispatchToProps)(Sides);
