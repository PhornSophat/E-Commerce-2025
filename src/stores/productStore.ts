import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    categories: [] as any[],
    Promotions: [] as any[],
    products: [] as any[],
  }),

  actions: {
    async fetchCategories() {
      try {
        const res = await axios.get("http://localhost:3000/api/categories")
        this.categories = res.data
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    },

    async fetchPromotions() {
      try {
        const res = await axios.get("http://localhost:3000/api/promotions")
        this.Promotions = res.data
      } catch (error) {
        console.error("Error fetching promotions:", error)
      }
    },

    async fetchProducts() {
      try {
        const res = await axios.get("http://localhost:3000/api/products")
        this.products = res.data
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
  }
})
