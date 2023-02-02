<template>



     <div>
            <img src="@/assets/banner.png" alt="" class=" bg-cover px-3 py-2 mt-4 mx-auto">
    </div>

    <div class=" mt-10 py-3 bg-gradient-to-b from-white to-sky-100">
        <div class=" my-6 text-2xl font-semibold text-sky-800">
           <h1> Lastest Products </h1>
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

                <div class="py-3">
                      <div class=" text-gray-700 font-sans font-bold text-right my-2"> $ {{ product.price}}</div>
               
                    <small class="text-gray-500 text-justify"> {{ product.description.substring(0,100)+"..."}}</small>

                </div>

                

                <div class="my-4 flex justify-between">
                    <button class="rounded-md py-2 px-3 bg-indigo-400 hover:bg-indigo-800 border-0 shadow-sm text-white text-sm transition duration-300"
                             @click="cartAdd"> 
                        <CartIcon/> 
                    </button>

                    <button class="rounded-md test-pink-500 hover:text-pink-800 border-0 shadow-sm text-sm transition duration-300"> <WishIcon/> </button>

                     <router-link :to="`/product/${product.id}`" class=" rounded-md py-2 px-3 bg-gray-200 hover:shadow-md border-0 shadow-sm text-green-700 transition duration-300"> 
                         <DetailIcon/>
                    </router-link>
                </div>
          
           </div>

          
       </div>

       <div class=" flex flex-row-reverse my-3">
          
           <router-link to="/product" class=" px-3 py-2 mx-3 rounded-md shadow-lg shadow-cyan-500/50 bg-cyan-500 text-white"> View More</router-link>
       </div>
    </div>





    <div class=" py-3 bg-gradient-to-b from-sky-100 to-white">
        <div class=" mx-2 my-6 text-3xl font-semibold text-cyan-800 text-ellipsis">
           <h1> Special Promotion Products </h1>
        </div> 
       
       <div class=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 space-x-6 justify-center px-6">


                     <div class=" bg-white rounded-md px-3 py-2 shadow-sm ring-blue-900
                         hover:shadow-lg transition duration-700
                         w-44  md:w-60 
                          my-3 mx-0 "
                           v-for="product in products" :key="product.id">

                <img :src="product.image" alt="" class="mx-auto h-20 w-20 md:h-40 md:w-40">

              <div class="my-0 md:my-2">
                     <h6 class=" text-sky-900 font-semibold text-left px-2 py-1 text-sm"> {{ product.title}} </h6>

                   
                </div>

                <div class="py-0 md:py-2">
                    <div class=" text-gray-700 font-sans font-bold text-right my-2"> $ {{ product.price}}</div>
               
                    <small class="text-gray-500 invisible md:visible"> {{ product.description.substring(0,100)+"..."}}</small>
                </div>
                  

                <div class=" my-0 md:my-4 flex justify-between">
                    <button class="rounded-md py-2 px-3 bg-indigo-400 hover:bg-indigo-800 border-0 shadow-sm text-white text-sm transition duration-300"
                                @click="cartAdd(product)">
                         <CartIcon/> 
                    </button>

                    <button class="rounded-md text-pink-400 hover:text-pink-800 border-0 shadow-sm text-sm transition duration-300"> <WishIcon/> </button>

                     <router-link :to="`/product/${product.id}`" class=" rounded-md py-2 px-3 bg-gray-200 hover:shadow-md border-0 shadow-sm text-green-700 transition duration-300"> 
                         <DetailIcon/>
                    </router-link>
                </div>
          
           </div>

     
          

           
          
          
       </div>

         <div class=" flex flex-row-reverse my-3">
            <router-link to="/product" class=" px-3 py-2 mx-3 rounded-md shadow-lg shadow-green-500/50 bg-green-500 text-white"> View More</router-link>
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

       name: 'Home',

       components: {
                    MenuIcon,
                    CartIcon,
                    WishIcon,
                    DetailIcon
                    },
       
        data() {
            return {
                products:[],
            }
        },

        methods: {
                cartAdd(product){
                    //this.$store.commit("addYoCart");
                    this.$store.dispatch("addToCart", product)
            }
        },

        created() {
            axios.get('http://fakestoreapi.com/products')
            .then( response => {
                this.products = response.data.slice(0,8)
            });
        }

       
    
}
</script>