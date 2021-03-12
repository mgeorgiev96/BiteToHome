import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import uniqid from 'uniqid'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

function Menu(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div id='menu'>
      <h5>OUR MENU</h5>
      <h1>Specialties From The Kitchen</h1>
      <div className='container_menu'>
        {props.menu.menu.map(item=>{
          return <Card key={uniqid()} className='card_container'>
              <CardMedia
              className={classes.media}
              image={item.image}
              title={item.title}
            />
            <Link to={`/${item.title.toLowerCase()}`}><h3 className='card_title'>{item.icon} {item.title}</h3></Link>
          </Card>
        })}
      </div>
    </div>
  );
}


const mapStateToProps = state =>{
  return {
    menu: state.menu
  }
}


export default connect(mapStateToProps)(Menu);