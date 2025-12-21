<template>
  <div :style="{ backgroundColor: cateBgColor }"
    class="flex flex-col h-54 w-44 rounded-2xl hover:border-gray-500 hover:border-2 p-2"
  >
    <div class="flex items-center justify-center">
      <img :src="image" :alt="alt" class="h-24 w-24 object-contain"/>
    </div>
    <div class="flex flex-col w-full h-1/2 items-center justify-center">
      <p class="text-2xl font-semibold">{{ title }}</p>
      <p class="text-gray-600 font-bold ">{{ item }} items</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Category',
    
    props: {
      title: String,
      item: Number,
      cateBgColor: String,
      image: String,
      alt: String
    },
  }

</script>