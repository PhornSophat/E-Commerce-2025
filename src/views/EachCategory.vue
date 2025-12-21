<template>
  <div class="w-full font-sans bg-white absolute top-40">
    <div class="px-8 py-6">
      <div class="relative w-full h-[180px] bg-[#DFF1E7] rounded-3xl flex flex-col justify-center px-12 overflow-hidden">
        
        <div class="absolute inset-0 opacity-10 pointer-events-none select-none flex justify-around items-center">
            <svg v-for="i in 5" :key="i" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#3BB77E" stroke-width="0.5">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
        </div>

        <h2 class="relative z-10 text-[40px] font-bold text-[#253D4E] capitalize">
          {{ categoryName }}
        </h2>
        <div class="relative z-10 flex items-center gap-2 text-[13px] text-gray-500 mb-2">
          <span @click="goHome" class="hover:text-[#3BB77E] cursor-pointer">Home</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m9 18 6-6-6-6"/></svg>
          <span class="hover:text-[#3BB77E] cursor-pointer">Categories</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m9 18 6-6-6-6"/></svg>
          <span class="text-gray-400 capitalize">{{ categoryName }}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const router = useRouter();

// Get the parameter from the URL: /category/:categoryName
const categoryName = computed(() => {
  const name = route.params.categoryName as string;
  // Clean up the text (e.g., "meat-seafood" -> "Meat & Seafood")
  return name ? name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Category';
});

const goHome = () => router.push('/');
</script>