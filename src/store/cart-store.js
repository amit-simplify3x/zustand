import  {create} from 'zustand'


 export const useCartStore=create((set)=>({
    cart:[],
    addToCart:(product)=>set((state)=>({cart:[...state.cart,product]})),
    removeFromCart:(productId)=>set((state)=>({cart:state.cart.filter((product)=>product?.Id!==productId)})),
    clearCart:()=>set({cart:[]}),
}))