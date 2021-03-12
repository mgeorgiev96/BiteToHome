import * as ACTIONS_TYPES from './action_types'

export const addToCart = (total,item)=>{
    return {
        type: ACTIONS_TYPES.ADD_CART,
        payload: {total,item}
    }
}

export const removeCart = (total,item) => {
    return {
        type: ACTIONS_TYPES.REMOVE_CART,
        payload: {total,item}
    }
}
export const userData = (user)=>{
    return {
        type: ACTIONS_TYPES.USER,
        payload: user
    }
}

export const order = ()=>{
    return {
        type: ACTIONS_TYPES.ORDER,
    }
}

