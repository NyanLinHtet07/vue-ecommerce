<template>
    <div class="">
        <div class=" fixed bottom-0 right-4 mx-4 my-6 p-4">
            <router-link to="/cart">
                    <div class=" text-lg py-2 px-3 rounded-lg shadow-lg text-white bg-sky-500 z-40
                                hover:text-sky-500 hover:bg-white hover:shadow-xl transition duration-300">
                        <CartDataIcon/> 
                        <span class=" absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1
                                        font-bold text-xs leading-none text-sky-900 transform translate-x-1/2 translate-y-1/2
                                        bg-gray-400 rounded-full"> {{count}} </span>
                    </div>
            </router-link>
            
        </div>
        <div class=" bg-gradient-to-t from-sky-400 to-white h-32">
                <h1 class="text-3xl font-bold text-sky-900 font-sans text-center mt-6"> FUIFIL </h1>

        </div>

      
    </div>
</template>

<script>


import CartDataIcon from "vue-material-design-icons/CartCheck.vue";
export default {
    name: 'footer',
    components: {
        CartDataIcon,
    },

    computed: {
        
        count(){
            return this.$store.state.cartItemCount;
        }
    }
    
}
</script>