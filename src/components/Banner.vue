<template>
  <section class="relative w-full mx-auto overflow-hidden rounded-3xl bg-[#F8EFD4]">
    <div class="absolute inset-0 opacity-10 pointer-events-none">
       <img src="https://www.transparenttextures.com/patterns/food.png" alt="pattern" class="w-full h-full object-cover">
    </div>

    <div class="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-12 md:px-16 md:py-20">
      
      <div class="w-full md:w-1/2 text-left mb-8 md:mb-0">
        <h2 class="text-4xl md:text-5xl font-bold text-[#253D4E] leading-tight mb-4">
          Don't miss amazing grocery deals
        </h2>
        <p class="text-lg text-[#7E7E7E] mb-10">
          Sign up for the daily newsletter
        </p>

        <form @submit.prevent="handleSubscribe" class="relative max-w-md">
          <div class="flex items-center bg-white rounded-full overflow-hidden p-1 shadow-sm">
            <div class="pl-5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </div>
            
            <input 
              v-model="email"
              type="email" 
              placeholder="Your email address" 
              class="w-full px-4 py-3 outline-none text-gray-700 placeholder-gray-400"
              required
            />
            
            <button 
              type="submit" 
              class="bg-[#3BB77E] hover:bg-[#2eaa70] text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <div class="w-full md:w-1/2 flex justify-end">
        <img 
          src="../assets/banner.png" 
          alt="Grocery basket with apples" 
          class="w-full max-w-md md:max-w-lg object-contain transform md:translate-x-10"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const handleSubscribe = () => {
  console.log('Subscribing:', email.value);
  alert(`Subscribed with: ${email.value}`);
  email.value = '';
};
</script>

<style scoped>
/* Custom font matching the image style */
section {
  font-family: 'Quicksand', sans-serif;
}
</style>