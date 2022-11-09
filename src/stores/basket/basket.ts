import { defineStore } from "pinia";
import { computed, ref } from "vue";

import type { IProductItemInCart, IProductItem } from "@/@type";

import { addProductItemToBasket } from "./basket.helpers";

export const useBasketStore = defineStore("basketStore", () => {
  const basketProductList = ref([] as IProductItemInCart[]);

  const isBasketEmpty = computed(() => basketProductList.value.length === 0);

  const addItemAction = (item: IProductItem) => {
    addProductItemToBasket(item, basketProductList.value);
  };

  return {
    basketProductList,
    addItemAction,
    isBasketEmpty,
  };
});
