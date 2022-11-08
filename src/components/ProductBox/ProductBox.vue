<template>
  <div class="bg-white container">
    <div class="mx-auto max-w-lg -mt-8 px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-6 mt-6">
        <div
          v-for="categoryProduct in products"
          :key="categoryProduct[0].foodId"
          class="flex flex-col gap-6 pt-16"
          :id="categoryProduct[0].category"
        >
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            {{ CategoryConstants[categoryProduct[0].category[0] as TCategory] }}
          </h2>
          <div
            v-for="product in categoryProduct"
            :key="product.foodId + product.priceOfFood"
            class="grid grid-cols-4 group relative divide-y divide-slate-200 w-full"
            ref="refItem"
          >
            <ProductItem :product="product"></ProductItem>
          </div>
        </div>
      </div>
    </div>
    <div ref="refDiv">ref Div</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onUnmounted, onMounted, ref, onUpdated } from "vue";

import { useProductStore } from "@/stores/product/product";

import ProductItem from "./ProductItem.vue";
import { CategoryConstants } from "../NavBar/NavBar.helpers";
import type { TCategory } from "../NavBar/NavBar.helpers";

const productStore = useProductStore();
const refDiv = ref(null);
const refItem = ref(null);
const { products } = storeToRefs(productStore);

const addItemToCart = (e: Event) => {
  e.stopPropagation();
  console.log("adding to cart");
};

onMounted(() => {
  //@ts-ignore
  // eslint-disable-next-line vue/no-ref-as-operand
  // const categories = refItem;
  // console.log({ refItem: categories });
  console.log({ products });
  window.addEventListener("scroll", notice);
});
onUpdated(() => {
  const categories = refItem.value as unknown as HTMLDivElement[];
  categories.forEach((element) => {});
  // console.log({ refItem: categories.value[0] });
});

onUnmounted(() => {
  window.removeEventListener("scroll", notice);
});

const notice = () => {
  // console.log("hallo", products);
};
</script>
