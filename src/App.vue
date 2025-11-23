<script>
import axios from "axios";
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";

export default {
  name: "App",

  components: {
    Category,
    Promotion,
  },

  data() {
    return {
      categories: [],    // will be loaded from backend
      Promotions: [],    // will be loaded from backend
    };
  },

  methods: {
    shopNow() {
      console.log("Shop now clicked");
    },

    async fetchCategories() {
      try {
        const res = await axios.get("http://localhost:3000/api/categories");
        this.categories = res.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },

    async fetchPromotions() {
      try {
        const res = await axios.get("http://localhost:3000/api/promotions");
        this.Promotions = res.data;
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
    },
  },

  mounted() {
    this.fetchCategories();
    this.fetchPromotions();
  },
};
</script>


<template>
  <div class="flex flex-col w-screen justify-center items-center p-4 gap-y-6">
    <div class="flex flex-wrap items-center justify-center gap-4">
      <Category 
        v-for="( item, i ) in categories"
        :key = " i "
        :title = " item.name " 
        :item = " item.productCount " 
        :image="`http://localhost:3000/${item.image}`"
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
