<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from './stores/productStore'

import Category from "./components/Category.vue"
import Promotion from "./components/Promotion.vue"
import Menu from "./components/Menu.vue"
import ProductCard from "./components/ProductCard.vue"

const store = useProductStore()

const PopularProducts = [{ title: "Popular Products"}]
const FeaturedCate = [{ title: "Featured Categories"}]

onMounted(() => {
  store.fetchCategories()
  store.fetchPromotions()
  store.fetchProducts()
})
</script>

<template>
  <div class="flex flex-col w-screen justify-center items-center p-4 px-[8vw] gap-y-6">

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
      />
    </div>

    <div class="flex flex-wrap w-full gap-4 items-center justify-between py-14">
      <Promotion
        v-for="(item, i) in store.Promotions"
        :key="i"
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