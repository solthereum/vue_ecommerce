import { defineStore } from "pinia";
import { computed, ref } from "vue";

import type { IFoodItem } from "@/@type";

import { useProductStore } from "../product/product";

export const useBasketStore = defineStore("basketStore", () => {
  const basketProductList = ref([] as any[]);

  const isBasketEmpty = computed(() => basketProductList.value.length === 0);

  const products = useProductStore();

  const addItemToBasket = (item: IFoodItem) => {
    basketProductList.value.push(item);
  };

  return {
    basketProductList,
    addItemToBasket,
    isBasketEmpty,
  };
});
