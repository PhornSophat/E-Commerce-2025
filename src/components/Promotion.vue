
<template>

  <button
    :style="{ backgroundColor: bgColor }"
    class="flex w-[620px] h-80 rounded-2xl relative overflow-hidden"
  >
    <img
      :src="imgSrc"
      :alt="imgAlt"
      class="absolute bottom-0 right-0 rounded-2xl object-contain"
    />

    <!-- Text content -->
    <div class="relative w-78 flex flex-col left-6 justify-center items-center gap-y-10">
      <span class="text-4xl font-bold">{{ title }}</span>
      <Buttom1 :btnText = 'btnText' :btnColor = 'btnColor' @click="shopNow(Promotions)" />
    </div>
  </button>

</template>

<script>
import Buttom1 from './Button.vue';
 
export default {
    name: 'Promotion',
    components: {
        Buttom1
    },

    props: {
      bgColor: String,
      title: String,
      imgSrc: String,
      imgAlt: String,
      btnColor: String,
      btnText: String,
      Promotions: Object
    },
    methods: {
      shopNow(Promotions) {
        alert("Shop now clicked for promotion:" + Promotions.title );
      }
    }
}

</script>
