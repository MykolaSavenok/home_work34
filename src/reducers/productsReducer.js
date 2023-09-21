const initialState = {
   products: [],
};


const productReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_PRODUCT':
         return {
            ...state,
            products: [...state.products, action.payload],
         };

      case "EDIT_PRODUCT": {
         const updatedProducts = state.products.map((product) =>
            product.id === action.payload.id
               ? {
                  ...product,
                  caption: action.payload.caption,
                  amount: action.payload.amount,
               }
               : product
         );

         return {
            ...state,
            products: updatedProducts,
         };
      }
      case 'REMOVE_PRODUCT':
         return {
            ...state,
            products: state.products.filter(product => product.id !== action.payload.id),
         };
      default:
         return state;
   }
};


export default productReducer;
