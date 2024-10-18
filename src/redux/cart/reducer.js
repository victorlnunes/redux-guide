import CartActionTypes from "./action-types";

const initialState = {
    products: [],
    cartTotal: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            const productInCart = state.products.some(product => product.id === action.payload.id)
            if (productInCart) {
                return {
                    ...state,
                    products: state.products.map(product =>
                        product.id === action.payload.id ?
                            { ...product, quantity: product.quantity + 1 }
                            : product
                    )
                }
            }
            return {
                ...state,
                products: [...state.products, { ...action.payload, quantity: 1 }]
            }

        default:
            return state;
    }
}
export default cartReducer;