<template>
  <div class="group relative flex flex-col w-[300px] border border-gray-100 rounded-2xl p-5 hover:border-green-200 hover:shadow-lg transition-all duration-300 bg-white">
    <div 
      v-if="badgeText"
      :class="badgeClass"
      class="absolute top-5 left-0 px-2 py-1.5 rounded-r-2xl text-white text-xs font-medium z-10 uppercase"
    >
      {{ badgeText }}
    </div>

    <div class="h-60 w-full flex items-center justify-center mb-4 mt-2">
      <img :src="image" :alt="name" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
    </div>

    <div class="flex flex-col flex-grow">
      <span class="text-[11px] text-gray-400 mb-1">{{ brand }}</span>
      <h3 class="text-sm font-bold text-[#253D4E] leading-tight mb-2 h-10 line-clamp-2">
        {{ name }}
      </h3>
      
      <div class="flex items-center gap-1 mb-2">
        <div class="flex text-yellow-400 text-[10px]">
          <span v-for="i in 5" :key="i">★</span>
        </div>
        <span class="text-[11px] text-gray-400">({{ rating.toFixed(1) }})</span>
      </div>

      <span class="text-[11px] text-gray-400 mb-3">{{ weight }}</span>

      <div class="flex items-center justify-between mt-auto">
        <div class="flex items-center gap-2">
          <span class="text-lg font-bold text-[#3BB77E]">${{ price.toFixed(2) }}</span>
          <span v-if="oldPrice > price" class="text-xs text-gray-400 line-through">${{ oldPrice.toFixed(2) }}</span>
        </div>
        
        <button class="bg-[#DEF9EC] text-[#3BB77E] px-4 py-1.5 rounded text-xs font-bold hover:bg-[#3BB77E] hover:text-white transition-colors flex items-center gap-1">
          Add <span class="text-lg leading-none">+</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    brand: String,
    name: String,
    image: String,
    rating: { type: Number, default: 0 },
    weight: String,
    price: { type: Number, default: 0 },
    oldPrice: { type: Number, default: 0 },
    badgeText: String
  },
  computed: {
    badgeClass() {
      const text = this.badgeText?.toLowerCase() || '';
      // Automated coloring based on text content
      if (text.includes('hot')) return 'bg-[#FD6E6E]';   // Red
      if (text.includes('sale')) return 'bg-[#FDC040]';  // Orange
      return 'bg-[#3BB77E]';                             // Default Green
    }
  }
}
</script>