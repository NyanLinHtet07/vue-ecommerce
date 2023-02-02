import { createStore } from 'vuex'

const store = createStore ({
  state: {
     
      cartItemCount: 0,
      cartItems : []
      
  },


  mutations: {
        addToCart(state , payload){

          let item = payload;
          item = { ...item, quantity:1 }

          if( state.cartItems.length > 0 ) {
            let bool = state.cartItems.some (i => i.id == item.id)
            if(bool) {
              let itemIndex = state.cartItems.findIndex (el => el.id === item.id)
              state.cartItems[itemIndex]["quantity"] += 1;
             }
             else{
               state.cartItems.push(item)
             }
          } 
            else {
              state.cartItems.push(item)
            }
          state.cartItemCount ++
        },

        removeItem( state, payload){
            if( state.cartItems.length > 0) {
              let bool = state.cartItems.some(i => i.id === payload.id)

              if(bool) {
                let index = state.cartItems.findIndex(el => el.id === payload.id)

                if(state.cartItems[index]["quantity"] !== 0){
                  state.cartItems[index]["quantity"] -= 1
                  state.cartItemCount --
                }

                if( state.cartItems[index]["quantity"] === 0){
                  state.cartItems.splice(index, 1)
                }
 
              
              }
            }
        },

        clearCart(state, cartItems){
            state.cartItems = cartItems;
            state.cartItemCount =0;
        }
  },

  actions: {
    addToCart: (context, payload) => {
        context.commit("addToCart", payload)
    },

    removeItem: (context, payload) => {
      context.commit("removeItem", payload)
    },

    clearCart ({commit}){
        commit('clearCart', []);
    }

  }

})



//export store

export default store
