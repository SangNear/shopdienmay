// CartReducer.tsx

const CartReducer = (state: any[], action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        // Sản phẩm đã tồn tại, tăng số lượng
        const updatedCart = state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return updatedCart;
      }

      // Sản phẩm chưa có trong giỏ, thêm mới với quantity = 1
      return [...state, { ...action.payload, quantity: 1 }];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export default CartReducer;
