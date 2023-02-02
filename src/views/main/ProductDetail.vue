<template>
    <div class=" container mx-3 my-5 px-3 py-2">

    
  
        <div class=" flex flex-row-reverse">
                    <router-link to='/' class="text-white bg-zinc-500 rounded-lg border-0 ring-2 ring-zinc-300
                                                transition duration-500 px-3 py-2 mx-2
                                                hover:bg-zinc-800">
                            Back
                        </router-link>
                    </div>
      

        <div class=" grid grid-cols-1 md:grid-cols-2 gap-2 my-4 px-2 py-3">
            <div>
                <img :src="product.image" alt="" srcset="" class="object-fill h-80 w-80  md:mx-6 mx-auto">
            </div>


            <div class="text-left">
                 
                <h1 class=" text-sky-900 text-left font-bold text-3xl my-4"> {{ product.title}} </h1>

                <div class=" text-sky-700 font-semibold text-xl px-3 py-2"> $ {{ product.price}}</div>

                <div class=" text-gray-500 text-sm text-justify">{{ product.description }}</div>

                <div class="flex justify-end my-5">
                        <button class="py-2 px-3 mx-2 rounded-xl shadow-sm text-gray-50 bg-green-400 hover:bg-green-600 shadow-green-600/100 transition duration-300"
                                    @click="cartAdd">
                             <CartIcon/>
                        </button>

                         <button class=" py-2 px-3 mx-2 rounded-xl shadow-sm text-gray-50 bg-pink-400 hover:bg-pink-600 shadow-pink-500/100 transition duration-300">
                           <WishIcon/> 
                        </button>
                </div>
            </div>
        </div>
         
    </div>
</template>

<script>

import axios from "axios";
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import CartIcon from 'vue-material-design-icons/CartArrowDown.vue';
import WishIcon from 'vue-material-design-icons/HeartPlus.vue';
import DetailIcon from 'vue-material-design-icons/ClipboardTextSearch.vue';

export default {
    name:'product-detail',

     components: {
                    MenuIcon,
                    CartIcon,
                    WishIcon,
                    DetailIcon
                    },

    
    data() {
        return {
            product: {}
        }
    },

    methods: {
         cartAdd(){
                    this.$store.commit("increment");
            }
    },

    created() {
        axios.get(`http://fakestoreapi.com/products/${this.$route.params.id}`)
        .then(response => {
            this.product = response.data
            //onSuccess(response);
            //resolve(response);
        })
    }
}
</script>
