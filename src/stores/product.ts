import { fetchMenuCollection } from "@/api";
import { defineStore } from "pinia";
import { ref } from "vue";

import type { IFoodItem } from "../@type";

export const useProductStore = defineStore("productStore", () => {
  const products = ref([] as IFoodItem[]);

  const fetchProductList = async () => {
    try {
      const { data } = await fetchMenuCollection();
      products.value = await data?.data?.menuCollection.items;
    } catch (error) {
      console.log("something wrong ...", error);
    }
  };

  return {
    products,

    fetchProductList,
  };
});
