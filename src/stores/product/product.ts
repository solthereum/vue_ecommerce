import { defineStore } from "pinia";
import { ref } from "vue";

import type { IFoodItem } from "@/@type";
import { fetchMenuCollection } from "@/api";

import { categorizedProducts } from "./product.helpers";

export const useProductStore = defineStore("productStore", () => {
  const products = ref([] as IFoodItem[][]);

  const fetchProductList = async () => {
    try {
      const { data } = await fetchMenuCollection();
      const productList = await data?.data?.menuGaoVeGanCollection.items;
      products.value = categorizedProducts(productList);
    } catch (error) {
      console.log("something wrong ...", error);
    }
  };

  return {
    products,
    fetchProductList,
  };
});
