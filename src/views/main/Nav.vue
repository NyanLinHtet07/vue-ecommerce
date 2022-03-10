<template>
    <div>
        <div class="bg-gradient-to-b from-sky-200 to-white">

         
            <nav class=" container px-8 py-8 
                         md:flex md:items-center md:justify-between">

                <!------------------ for logo or Text -------------------->
                <div class=" flex items-center justify-between">

                    <router-link to="/" class=" text-xl font-bold text-sky-900 font-sans">
                         FulFil 
                    </router-link>

                     <!-------------------- for mobile version ----------------->
                        <div @click="toggleNav" class="flex md:hidden">
                            <button type="submit"
                                    class=" text-sky-800 hover:text-sky-500
                                                focus: outline-none focus:texy-sky-500">
                                 <MenuIcon/>
                            </button>
                        </div>

                </div>

                <ul :class=" showMenu ? 'flex' : 'hidden'"
                    class=" flex-col mt-8 space-y-4
                            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">

                    <li class="text-sm font-bold text-sky-800 hover:text-gray-600"> <router-link to="/"> Home </router-link></li>
                    <li class="text-sm font-bold text-sky-800 hover:text-gray-600"> <router-link to="/product"> Product </router-link></li>
                    <li class="text-sm font-bold text-sky-800 hover:text-gray-600"> <router-link to="/"> Contact </router-link></li>
                      <li class="text-sm font-bold text-sky-800 hover:text-gray-600"> <router-link to="/product"> Login </router-link></li>
                   <li class="text-sm font-bold text-sky-800 hover:text-gray-600">
                       <select class="custom-select" @change="handleChange($event)">
                           <option value="en"> Eng</option>
                           <option value="mm"> မြန်မာ </option>
                       </select>
                   </li>
                </ul>

               
            </nav>
        </div>
    </div>
</template>
<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';



export default {
    name:'Navigation',

     components: {
                    MenuIcon,
                   
                    },

    data() {
        return {
             showMenu: false,

          
        }
    },

    methods: {
         toggleNav: function () {
        this.showMenu = !this.showMenu;
      },

      handleChange(event){
          localStorage.setItem('lang', event.target.value);
            window.location.reload();
      }
    }
}
</script>