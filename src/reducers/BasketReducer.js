const ADD_TO_BASKET = 'ADD_TO_BASKET'

const dafaultState = {
    items: []
}

export default function Basket(state = dafaultState, action) {
    switch (action.type) {
        case ADD_TO_BASKET : {
            return {...state, items: [...state.items, action.payload]}
        }
        default: return state;
    }
    
}