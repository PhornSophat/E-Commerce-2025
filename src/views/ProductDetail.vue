<template>
  <div class="w-full bg-white font-sans absolute top-40 px-[8vw]">
    <div class="px-8 py-6">
      <nav class="flex items-center gap-2 text-sm text-gray-500 mb-4 capitalize">
        <router-link to="/" class="hover:text-[#3BB77E]">Home</router-link>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        <router-link :to="`/category/${route.params.categoryName}`" class="hover:text-[#3BB77E]">
          {{ route.params.categoryName?.toString().replace(/-/g, ' ') }}
        </router-link>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        <span class="text-gray-400">{{ product?.name }}</span>
      </nav>

      <div v-if="product" class="flex flex-col lg:flex-row gap-12">
        
        <div class="flex-1">
          <div class="relative border border-gray-100 rounded-3xl overflow-hidden bg-white p-10 mb-6 group">
            <img :src="activeImage" :alt="product.name" class="w-full h-auto object-contain max-h-[500px] transition-transform duration-500 group-hover:scale-105" />
            <button class="absolute top-6 right-6 p-3 bg-white rounded-full shadow-sm text-gray-400 hover:text-[#3BB77E]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
          </div>
          
          <div class="flex gap-4 overflow-x-auto pb-2">
            <div 
              v-for="(img, idx) in product.parsedImages" 
              :key="idx"
              @click="activeImage = `http://localhost:3000/${img}`"
              :class="['w-24 h-24 border-2 rounded-2xl p-2 cursor-pointer flex-shrink-0 transition-all', 
                       activeImage === `http://localhost:3000/${img}` ? 'border-[#3BB77E] bg-[#F2F3F4]' : 'border-gray-100 hover:border-[#3BB77E]']"
            >
              <img :src="`http://localhost:3000/${img}`" class="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        <div class="flex-1 pt-4">
          <span class="bg-[#DEF9EC] text-[#3BB77E] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">In Stock</span>
          <h1 class="text-[40px] font-bold text-[#253D4E] leading-tight mt-4 mb-4">{{ product.name }}</h1>
          
          <div class="flex items-center gap-2 mb-6">
            <div class="flex text-amber-400 text-lg">
              <span v-for="i in 5" :key="i">★</span>
            </div>
            <span class="text-gray-400 text-sm">({{ product.rating || '4.0' }} review)</span>
          </div>

          <div class="flex items-center gap-4 mb-8">
            <span class="text-6xl font-bold text-[#3BB77E] tracking-tight">${{ currentPrice }}</span>
            <div class="flex flex-col" v-if="product.promotionAsPercentage > 0">
              <span class="text-sm font-bold text-amber-500">{{ product.promotionAsPercentage }}% Off</span>
              <span class="text-2xl text-gray-400 line-through">${{ product.price }}</span>
            </div>
          </div>

          <p class="text-[#7E7E7E] text-lg leading-relaxed mb-8">{{ product.description || 'No description available for this product.' }}</p>

          <div class="flex flex-wrap items-center gap-4 mb-10">
            <div class="flex items-center border-2 border-[#3BB77E] rounded-[5px] px-4 py-3 min-w-[100px] justify-between">
              <input type="number" v-model="quantity" class="w-8 text-center outline-none font-bold text-[#3BB77E]" min="1" />
              <div class="flex flex-col">
                <button @click="quantity++" class="text-[#3BB77E] text-[10px] hover:scale-125">▲</button>
                <button @click="quantity > 1 ? quantity-- : null" class="text-[#3BB77E] text-[10px] hover:scale-125">▼</button>
              </div>
            </div>
            <button class="bg-[#3BB77E] text-white px-10 py-4 rounded-[5px] font-bold flex items-center gap-2 hover:bg-[#2eaa70] transition-colors shadow-lg shadow-green-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              Add To Cart
            </button>
          </div>

          <div class="grid grid-cols-2 gap-y-2 text-sm border-t border-gray-100 pt-8">
            <p><span class="text-gray-400">Category:</span> <span class="text-[#3BB77E] ml-1">{{ product.group }}</span></p>
            <p><span class="text-gray-400">Weight:</span> <span class="text-[#3BB77E] ml-1">{{ product.size }}</span></p>
            <p><span class="text-gray-400">SKU:</span> <span class="text-[#3BB77E] ml-1">{{ product.id }}</span></p>
            <p><span class="text-gray-400">Tags:</span> <span class="text-[#3BB77E] ml-1">Organic, {{ product.group }}</span></p>
          </div>
        </div>
      </div>

      <div v-else class="animate-pulse flex flex-col lg:flex-row gap-12">
        <div class="flex-1 h-[400px] bg-gray-100 rounded-3xl"></div>
        <div class="flex-1 space-y-6">
          <div class="h-10 bg-gray-100 w-3/4 rounded"></div>
          <div class="h-20 bg-gray-100 rounded"></div>
          <div class="h-10 bg-gray-100 w-1/4 rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/productStore';

const route = useRoute();
const store = useProductStore();

const product = ref<any>(null);
const activeImage = ref('');
const quantity = ref(1);

// Calculate price based on promotion from backend
const currentPrice = computed(() => {
  if (!product.value) return 0;
  const basePrice = product.value.price;
  const discount = product.value.promotionAsPercentage || 0;
  return (basePrice - (basePrice * discount / 100)).toFixed(2);
});

const loadProductData = async () => {
  product.value = null; 
  const productSlug = route.params.productName as string;

  // Find product in store by comparing slugified name
  const foundProduct = store.products.find(p => 
    p.name.toLowerCase().trim().replace(/\s+/g, '-') === productSlug
  );

  if (foundProduct) {
    // Clean and parse images from backend string format
    const rawImages = typeof foundProduct.image === 'string' 
      ? foundProduct.image.replace(/[\[\]&quot;]/g, '').split(',') 
      : foundProduct.image;

    product.value = {
      ...foundProduct,
      parsedImages: rawImages
    };
    
    // Set initial image with full backend path
    activeImage.value = `http://localhost:3000/${product.value.parsedImages[0]}`;
  }
};

onMounted(async () => {
  if (store.products.length === 0) {
    await store.fetchProducts();
  }
  loadProductData();
});

watch(() => route.params.productName, () => {
  loadProductData();
});
</script>