import * as ACTION_TYPES from './action_types'


const initialState = {
    menu: [
        {title: 'Pizza',items: [
            {price: 17,name:'Meat Fiesta',image:'./static/react/images/toa31.png',ingredients: ['Tomato Sauce','Pepperoni','Cheese','Sausage','Ham','MeatBalls']},
            {price: 15,name:'Margherita',image:'./static/react/images/toa65.png',ingredients: ['Tomato Sauce','Mozzarella','Basil']},
            {price: 20,name:'New York-Style',image:'./static/react/images/toa32.png',ingredients: ['Tomato Sauce','Mozzarella','Cheddar Cheese','Basil']},
            {price: 16,name:'Pepperoni',image:'./static/react/images/toa28.png',ingredients: ['Tomato Sauce','Pepperoni','Cheddar Cheese']},
            {price: 18,name:'Pugliese',image:'./static/react/images/toa30.png',ingredients: ['Tomato Sauce','Sun-dried Tomato','Cheddar Cheese','Tomato']},
            {price: 16,name:'Pinsa Romana',image:'./static/react/images/toa35.png',ingredients: ['Tomato Sauce','Sun-dried Tomato','Cheddar Cheese','Tomato','Onions']},
            {price: 18,name:'Carbonara',image:'./static/react/images/toa33.png',ingredients: ['Tomato Sauce','Mushrooms ','Mozzarella','Bacon','Basil']},
            {price: 18,name:'BBQ Chicken Pizza',image:'./static/react/images/toa34.png',ingredients: ['BBQ Sauce','Chicken ','Mozzarella']}
        ],icon:<i class="fas fa-pizza-slice"></i>,image: './static/react/images/toa11.png'},
        {title: 'Sides',items: [
            {price: 3,name:'French Fries',image: './static/react/images/toa36.png',size:'350g'},
            {price: 4,name:'Potato Wedges',image: './static/react/images/toa37.png',size:'400g'},
            {price: 5,name:'Nachos',image: './static/react/images/toa38.png',size:'400g'},
            {price: 5,name:'Chicken Nuggets',image: './static/react/images/toa39.png',size:'300g'},
            {price: 4,name:'Chicken Wings',image: './static/react/images/toa40.png',size:'350g'},
            {price: 5,name:'Buffalo Wings',image: './static/react/images/toa41.png',size:'300g'},
            {price: 4, name:'Chicken Strippers',image: './static/react/images/toa42.png',size:'350g'},
            {price: 3, name:'Coleslaw',image: './static/react/images/toa43.png',size:'450g'}
        ],icon: <i class="fas fa-utensils"></i>,image: './static/react/images/toa21.png'},
        {title: 'Desserts',items: [
            {price: 3,name:'Chocolate Ice Cream',image: './static/react/images/toa44.png',size:'250g'},
            {price: 3,name:'Vanilla Ice Cream',image: './static/react/images/toa45.png',size:'250g'},
            {price: 3,name:'Pistachio Ice Cream',image: './static/react/images/toa46.png',size:'250g'},
            {price: 3,name:'Blueberry Pancakes',image: './static/react/images/toa47.png',size:'350g'},
            {price: 5,name:'Baked Alaska Cake',image: './static/react/images/toa48.png',size:'300g'},
            {price: 4,name:'Carrot Cake',image: './static/react/images/toa49.png',size:'300g'},
            {price: 4,name:'Tiramisu',image: './static/react/images/toa50.png',size:'250g'},
            {price: 5,name:'Chocolate Mousse',image: './static/react/images/toa51.png',size:'250g'}
        ],icon: <i class="fas fa-ice-cream"></i>,image: './static/react/images/toa13.png'},
        {title: 'Drinks',items: [
            {price: 3,name:'Lemonade',image: './static/react/images/toa52.png',size:'350ml'},
            {price: 2,name:'Coffee',image: './static/react/images/toa53.png',size:'250ml'},
            {price: 3,name:'Hot Chocolate',image: './static/react/images/toa54.png',size:'300ml'},
            {price: 1,name:'Water',image: './static/react/images/toa55.png',size:'500ml'},
            {price: 4,name:'Orange Juice',image: './static/react/images/toa56.png',size:'400ml'},
            {price: 3,name:'Latte',image: './static/react/images/toa57.png',size:'300ml'},
            {price: 4, name:'Mocha Latte',image: './static/react/images/toa58.png',size:'300ml'},
            {price: 4, name:'Flat White',image: './static/react/images/toa59.png',size:'300ml'}
        ],icon:<i class="fas fa-glass-cheers"></i>,image: './static/react/images/toa16.png'}
    ],
    total: 0,
    cart: [],
    user: {}
}

const menuReducer = (state=initialState,action)=>{
    switch(action.type){
        case ACTION_TYPES.ORDER:
            return {
                ...state,
                cart: [],
                total: 0
            }
        case ACTION_TYPES.USER:
            return {
                ...state,
                user: action.payload
            }
        case ACTION_TYPES.REMOVE_CART:
            return {
                ...state,
                cart: (()=>{
                    if(state.cart.some(i=> i !== undefined ? i.name===action.payload.item.name : 0)){
                        var arr = state.cart
                        return arr.filter(i=>i !== undefined ? i.name !== action.payload.item.name : '')
                    }else{
                        return state.cart
                    }
                })(),
                total: parseInt(state.total) - action.payload.total
            }
        case ACTION_TYPES.ADD_CART:
            return {
                ...state,
                cart: (()=>{
                    if(state.cart.some(i=> i.name===action.payload.item.name)){
                        var arr = state.cart
                        arr.forEach(i=> i.name === action.payload.item.name ? i.qty++ : '')
                        return arr
                    }else{
                        return [...state.cart,action.payload.item]
                    }
                })(),
                total: parseInt(state.total) + action.payload.total
            }
        default:
            return state
    }
}

export default menuReducer;