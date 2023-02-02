<template>
    <div class=" mt-3">
        <img src="@/assets/empty-cart.gif" alt="" class="m-auto">

        <div class="mt-6">
            <p class=" italic text-sky-700 text-xl"> Please left some items to card !!!</p>
            <div class=" mt-4">
                 <router-link to="/" class=" px-3 py-2 rounded-lg bg-sky-800 text-white border-none p-3 shadow-md shadow-sky-700"> Bring Me Back Home</router-link>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    name:'EmptyCart',
}
</script>