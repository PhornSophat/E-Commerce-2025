<script>

import Category from './components/Category.vue';
import Promotion from './components/Promotion.vue';

export default {
  name: 'App',
  components: {
    Category,
    Promotion,
  },
  data() {
    return{
      categories: [
        { title: 'Cake & Milk', item: 14, image:"/src/assets/cat-13 1.png", alt:"Pic1", cateBgColor:"#FEEFEA" },
        { title: 'Peach', item: 17, image:"/src/assets/cat-11 1.png", alt:"Pic2", cateBgColor:"#FEEFEA" },
        { title: 'Oganic Kiwi', item: 21, image:"/src/assets/cat-12 1.png", alt:"Pic3", cateBgColor:"#FEEFEA" },
        { title: 'Red Apple', item: 68, image:"/src/assets/cat-9 1.png", alt:"Pic4", cateBgColor:"#FEEFEA" },
        { title: 'Snack', item: 34, image:"/src/assets/cat-3 1.png", alt:"Pic5", cateBgColor:"#FEEFEA" },
        { title: 'Black plum', item: 25, image:"/src/assets/cat-4 1.png", alt:"Pic6", cateBgColor:"#FEEFEA" },
        { title: 'Vegetables', item: 65, image:"/src/assets/cat-1 4.png", alt:"Pic7", cateBgColor:"#FEEFEA" },
        { title: 'Headphone', item: 33, image:"/src/assets/cat-15 1.png", alt:"Pic8", cateBgColor:"#FEEFEA" },
        { title: 'Cake & Milk', item: 54, image:"/src/assets/cat-14 1.png", alt:"Pic9", cateBgColor:"#FEEFEA" },
        { title: 'Orange', item: 63, image:"/src/assets/cat-7 1.png", alt:"Pic10", cateBgColor:"#FEEFEA" }
      ],

      Promotions: [
        { title: 'Everyday Fresh & Clean with our Products', bgColor: '#F0E8D5', imgSrc: '/src/assets/promoImage1-rebg.png', imgAlt: 'Promotion 1', btnColor: '#3BB77E', btnText: 'Shop now' },
        { title: 'Make your Breakfast Healthy & Easy', bgColor: '#F3E8E8', imgSrc: '/src/assets/promo2.png', imgAlt: 'Promotion 2', btnColor: '#3BB77E', btnText: 'Shop now' },
        { title: 'The Best Organic Products Online', bgColor: '#E7EAF3', imgSrc: '/src/assets/promo3.png', imgAlt: 'Promotion 2', btnColor: '#FDC040', btnText: 'Shop now' }
      ]
    }
  }
}

</script>

<template>
  <div class="flex flex-col w-screen justify-center items-center p-4 gap-y-6">
    <div class="flex flex-wrap items-center justify-center gap-4">
      <Category 
        v-for="( item, i ) in categories"
        :key = " i "
        :title = " item.title " 
        :item = " item.item " 
        :image = " item.image "
        :alt = " item.alt "
        :cateBgColor = " item.cateBgColor "
      />

      
    </div>
    <div class="flex flex-wrap w-full gap-4 items-center justify-center">
      <Promotion
        v-for = "( item, i ) in Promotions"
        :key = " i "
        :title = " item.title "
        :bgColor = " item.bgColor "
        :imgSrc = " item.imgSrc "
        :imgAlt = " item.imgAlt "
        :btnColor = " item.btnColor "
        :btnText = " item.btnText "
        :Promotions = " item "
      />
     
    </div>
  </div>
</template>
