<template>
    <div>
      <div class=" mt-10 py-3 bg-gradient-to-b from-white to-sky-50">
        <div class=" my-6 text-2xl font-semibold text-sky-800">
           <h1> Products </h1>
        </div> 
       
       <div class=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 space-x-6 justify-center px-6 
                    md:flex-none ">
           <div class=" bg-white rounded-md px-3 py-2 shadow-sm ring-blue-900
                         hover:shadow-xl transition duration-700
                         w-64 my-3 " v-for="product in products" :key="product.id">
                <img :src="product.image" alt="" class="mx-auto h-40">

                <div class="my-2">
                     <h6 class=" text-sky-900 font-semibold text-left px-2 py-1 text-sm"> {{ product.title}} </h6>

                   
                </div>

                <div class="p-2">
                     <div class=" text-gray-700 font-sans font-bold text-right my-2"> $ {{ product.price}}</div>
               
                     <small class="text-gray-500 text-justify"> {{ product.description.substring(0,100)+"..."}}</small>
                </div>

               

              <div class="my-2 flex justify-between">
                    <button class="rounded-md py-2 px-3 bg-indigo-400 hover:bg-indigo-800 border-0 shadow-sm text-white text-sm transition duration-300"
                                 @click="cartAdd"> 
                        <CartIcon/> 
                    </button>

                    <button class="rounded-md text-pink-400 hover:text-pink-800 border-0 shadow-sm text-sm transition duration-300"> <WishIcon/> </button>

                     <router-link :to="`/product/${product.id}`" class=" rounded-md py-2 px-3 bg-gray-200 hover:shadow-md border-0 shadow-sm text-green-700 transition duration-300"> 
                         <DetailIcon/>
                    </router-link>
                </div>
          
           </div>

          
       </div>
   </div>
    </div>
</template>

<script>

import axios from "axios"
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import CartIcon from 'vue-material-design-icons/CartArrowDown.vue';
import WishIcon from 'vue-material-design-icons/HeartPlus.vue';
import DetailIcon from 'vue-material-design-icons/ClipboardTextSearch.vue';

export default {
    name:'Product',

    data() {
        return {
            products:{},
        }
    },

    components: {
                    MenuIcon,
                    CartIcon,
                    WishIcon,
                    DetailIcon
                    },
    
    methods: {
         cartAdd(){
                    this.$store.commit("increment");
            },
        
    },

    created(){
        axios.get('http://fakestoreapi.com/products')
            .then( response => {
                this.products = response.data
            });
    }
}
</script>