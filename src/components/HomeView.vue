<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from '../stores/productStore';

import Category from "../views/Category.vue";
import Promotion from "./Promotion.vue";
import Menu from "./Menu.vue";
import ProductCard from "../views/ProductCard.vue";
import Banner from './Banner.vue';
import { useRouter } from 'vue-router';
import ProductDetail from '../views/ProductDetail.vue';

const store = useProductStore()

const PopularProducts = [{ title: "Popular Products"}]
const FeaturedCate = [{ title: "Featured Categories"}]

onMounted(() => {
  store.fetchCategories()
  store.fetchPromotions()
  store.fetchProducts()
})
  const router = useRouter();

    const handleCategoryClick = (name: string) => {
    // Convert name to a URL-friendly slug (e.g., "Burger" -> "burger")
    const slug = name.toLowerCase().trim().replace(/\s+/g, '-');
    
    router.push({ 
      name: 'CategoryPage', 
      params: { categoryName: slug } 
    });
  };

  const handleProductClick = (productName: string) => {
    // Format the names into URL-friendly slugs
    const productSlug = productName.toLowerCase().trim().replace(/\s+/g, '-');

    router.push({
      name: 'ProductDetail', // Ensure this matches the name in your router/index.ts
      params: { 
        productName: productSlug 
      }
    });
  };

  const handlePromotionClick = (item: any) => {
    // If the promotion title corresponds to the product name
    const productSlug = item.title.toLowerCase().trim().replace(/\s+/g, '-');
    
    // We use a generic category like 'deals' if the promotion 
    // doesn't have a specific category attached to it
    const categorySlug = "angle's-boomchickapop-sweet-&-salty-kettle-corn"; 

    router.push({
      name: 'ProductDetail',
      params: { 
        categoryName: categorySlug, 
        productName: productSlug 
      }
    });
  };
  
</script>

<template>
  
  <div class="flex absolute w-screen flex-col justify-center items-center p-4 px-[8vw] gap-y-6 top-44">
    <!-- <Header /> -->

    
    <Banner class=" "/>
    <!-- <HomePage class="relative top-20 " /> -->
    <Menu v-for="(item, i) in FeaturedCate" :key="i" :title="item.title" />

    <div class="flex w-full flex-wrap items-center justify-between gap-4">
      <Category 
        v-for="(item, i) in store.categories"
        :key="i"
        :title="item.name" 
        :item="item.productCount" 
        :image="`http://localhost:3000/${item.image}`"
        :alt="item.alt"
        :cateBgColor="item.color"
        @click="handleCategoryClick(item.name)"
      />
    </div>

  <div class="flex flex-wrap w-full gap-4 items-center justify-between py-14">
    <Promotion
      v-for="(item, i) in store.Promotions"
      :key="i"
      @click="handlePromotionClick(item)" 
      class="cursor-pointer"
      :title="item.title"
      :bgColor="item.color"
      :imgSrc="`http://localhost:3000/${item.image}`"
      :imgAlt="item.title"
      :btnColor="item.buttonColor"
      btnText="Shop Now"
    />
  </div>

    <Menu v-for="(item, i) in PopularProducts" :key="i" :title="item.title" />

     <div class="flex flex-wrap justify-start gap-4">
      <ProductCard
          v-for="product in store.products"
          :key="product.id"
          @click="handleProductClick(product.name)"
          class="cursor-pointer"
          :brand="product.group"
          :name="product.name"
          :image="`http://localhost:3000/${product.image.replace(/[\[\]&quot;]/g, '')}`"
          :rating="product.rating"
          :weight="product.size"
          :oldPrice="product.price"
          :badgeText="product.promotion || (product.promotionAsPercentage > 0 ? `${product.promotionAsPercentage}% OFF` : '')"
          :price="product.price - (product.price * (product.promotionAsPercentage || 0) / 100)"
        />
    </div>
  </div>
</template>