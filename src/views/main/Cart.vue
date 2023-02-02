<template>
    <div class=" min-h-screen">
        <div v-if="totalPrice !== 0" class="">
            <table class=" mx-auto w-4/6 table-fixed bg-white border-0 my-4 rounded-lg">
                <thead class=" bg-white shadow-lg text-sky-900">
                    <tr>
                    <th> Photo </th>
                    <th> Name</th>
                    <th> Price</th>
                    <th> Qty</th>
                  
                    </tr>
                </thead>
                <tbody class=" bg-slate-100">
                    <tr v-for="item in cartItems" :key="item.id" class=" border-b-2 text-sky-800 text-sm ">
                    <td>  <img :src="item.image" alt="" class=" w-28 h-28 px-2 py-3 mx-auto"/></td>
                    <td>{{item.title}}</td>
                    <td>{{item.price}}</td>
                   
                    <td> 
                        <button @click="addItem(item)" class=" px-3 py-2 rounded-full bg-white font-bold text-green-700 shadow-sm
                         hover:text-white hover:bg-green-700 transition duration-500"> + </button> 
                            {{item.quantity}} 
                        <button @click="removedItem(item)" class=" px-3 py-2 rounded-full bg-white font-bold text-red-700 shadow-sm
                         hover:text-white hover:bg-red-700 transition duration-200"> - </button> </td>
                  
                    </tr>
                </tbody>
                <tfoot class="bg-slate-200 h-20">
                    <tr class=" font-bold text-lg text-sky-900">
                        <td colspan="2" class=" text-right"> Total </td>
                        <td colspan="2"> $ {{ totalPrice }}</td>
                    </tr>
                </tfoot>
            </table>
        </div>

        <EmptyCart v-else />

      


    </div>
</template>

<script>

import EmptyCart from "./Empty.vue"
export default {

    components: {
        EmptyCart,
    },

    methods: {
            addItem(item){
                this.$store.dispatch("addToCart", item)
            },

            removedItem(item){
                this.$store.dispatch("removeItem", item)
            }

    },
    
    computed: {
        cartItems() {
            return this.$store.state.cartItems;
        },

        totalPrice() {
            let price = 0;
            this.$store.state.cartItems.map(el => {
                price += el["quantity"] * el["price"]
            })

            return price;
        }
    }
}
</script>