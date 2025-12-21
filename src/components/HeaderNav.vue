<template>
  <div class="w-full bg-white font-sans">
    <header class="flex items-center justify-between px-8 py-4 border-b border-gray-100">
      
      <div class="flex items-center gap-3 shrink-0 cursor-pointer">
        <div class="relative w-12 h-10 flex flex-col items-center justify-center">
          <div class="flex gap-0.5 -mb-1">
            <div class="w-5 h-6 bg-amber-400 rounded-full border-[1.5px] border-slate-800 rotate-[-10deg]"></div>
            <div class="w-5 h-6 bg-amber-400 rounded-full border-[1.5px] border-slate-800 rotate-[10deg]"></div>
          </div>
          <div class="w-12 h-4 bg-emerald-500 rounded-full border-[1.5px] border-slate-800 overflow-hidden"></div>
        </div>
        <div>
          <h1 class="text-4xl font-bold text-[#3BB77E] leading-none tracking-tight">Melon</h1>
          <p class="text-[10px] tracking-[0.25em] font-bold text-slate-500 uppercase mt-1">Mart & Grocery</p>
        </div>
      </div>

      <div class="flex-1 max-w-[700px] mx-12">
        <div class="flex items-center border-[1.5px] border-[#BCE3C9] rounded-[4px] px-4 py-2.5 bg-white">
          <button class="flex items-center gap-3 text-slate-700 font-bold text-[14px] border-r border-gray-200 pr-4 mr-4 shrink-0 hover:text-[#3BB77E]">
            All Categories
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <input type="text" placeholder="Search for items..." class="w-full outline-none text-[14px] text-gray-600 placeholder-gray-400 bg-transparent" />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 cursor-pointer hover:text-[#3BB77E]"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
      </div>

      <div class="flex items-center gap-8 shrink-0">
        <div v-for="item in ['Account', 'Compare', 'Wishlist', 'Cart']" :key="item" class="flex items-center gap-1.5 cursor-pointer group">
          <div class="w-6 h-6 text-slate-700 group-hover:text-[#3BB77E]">
            <svg v-if="item === 'Account'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <svg v-if="item === 'Compare'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h10M9 15l3-3-3-3M22 12H12M15 9l-3 3 3 3"/></svg>
            <svg v-if="item === 'Wishlist'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            <svg v-if="item === 'Cart'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </div>
          <span class="text-[15px] text-slate-600 group-hover:text-[#3BB77E]">{{ item }}</span>
        </div>
      </div>
    </header>

    <nav class="flex items-center justify-between px-8 py-3 border-b border-gray-100">
      <div class="flex items-center gap-6">
        <button class="flex items-center gap-2 bg-[#3BB77E] text-white px-4 py-2.5 rounded-[5px] font-bold text-sm hover:bg-[#2fa36d]">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          Browse All Categories
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <ul class="flex items-center gap-7">
          <li v-for="(cat) in categories" 
              :key="cat.title" 
              @click="handleCategoryClick(cat.path)"
              class="text-[15px] font-bold text-slate-700 cursor-pointer hover:text-[#3BB77E] flex items-center gap-1">
              {{ cat.title }}
          </li>
        </ul>
      </div>

      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>
        <div class="text-right">
          <p class="text-[#3BB77E] text-lg font-bold leading-none">099 777 888</p>
          <p class="text-[11px] text-gray-400 font-medium">24/7 Support Center</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" >
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    // Define your categories with their respective routes
    const categories = [
      { title: 'Hot Deals', path: 'cake-milk' }, 
      { title: 'Home', path: '/home' }, 
      { title: 'Food', path: 'food' },   // This will become /category/food
      { title: 'Vegetables', path: 'vegetables' },
      { title: 'Drink', path: 'drink' },
      { title: 'Cookies', path: 'cookies' },
      { title: 'Meat & Seafood', path: 'meat&seafood' },
      { title: 'Bakery', path: 'bakery' },
    ];

    const handleCategoryClick = (path: string) => {
      if (path === '/home') {
        router.push('/');
      } else {
        // Navigate to the dynamic route structure
        router.push({ name: 'CategoryPage', params: { categoryName: path } });
      }
    };

    return {
      categories,
      handleCategoryClick
    };
  }
}
</script>