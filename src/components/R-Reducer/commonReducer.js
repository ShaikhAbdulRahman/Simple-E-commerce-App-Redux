export const commonReducers = (state = { product: [], cart: [], searchTerm: "",todo:[] }, action) => {
    if (action.type === "ADD-PRODUCT") {
        return { ...state, product: [...state.product, action.payload] };
    };
    if (action.type === "ADD-TO-CART") {
        return {
            ...state,
            cart: [...state.cart, action.payload],
        };
    };
    // if ( action.type === "REMOVE"){
    //     const filtered=state.cart.filter(
    //         (item,index)=>item !== action.payload)
    //     return{
    //         ...state,
    //         cart:filtered,
    //     }
    // }
    if (action.type === "REMOVE") {
        const filteredRemove = state.cart.findIndex(
            (item) => item === action.payload
        );
        if (filteredRemove !== -1) {
            const updatedcart = [...state.cart];
            updatedcart.splice(filteredRemove, 1);

            return {
                ...state,
                cart: updatedcart,
            };
        }
    };
    if (action.type === "UPDATE-SEARCH") {
        return { ...state, searchTerm: action.payload }
    };
    if (action.type === "ADD_TODO"){
        return { ...state,
        todo:[...state.todo, action.payload],
    };
    }
    return state;
}