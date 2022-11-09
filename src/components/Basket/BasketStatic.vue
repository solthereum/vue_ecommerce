<template>
  <div class="md:w-80 max-w-xs p-4">
    <div class="fixed bottom-0 left-0 bg-white w-full z-20 md:sticky md:top-0">
      <!-- Header from table device -->
      <div
        class="flex items-center h-16 text-center full-w justify-center text-lg font-bold"
      >
        Your Basket
      </div>
      <BasketEmpty v-if="isBasketEmpty"></BasketEmpty>
      <div v-if="!isBasketEmpty" class="divide-y divide-blue-200 py-2">
        <div
          class="py-2"
          v-for="product in basketProductList"
          :key="product.productId"
        >
          <BasketProductItem :product="product"></BasketProductItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useBasketStore } from "@/stores/basket/basket";

import BasketEmpty from "./BasketEmpty.vue";
import BasketProductItem from "./BasketProductItem.vue";

const basketStore = useBasketStore();

const { basketProductList, isBasketEmpty } = storeToRefs(basketStore);
</script>

<style></style>
