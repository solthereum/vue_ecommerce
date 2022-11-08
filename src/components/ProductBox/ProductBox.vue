<template>
  <div class="bg-white lg:w-4/5">
    <ProductCategories :activeCategory="activeCategory"></ProductCategories>
    <div class="mx-auto -mt-8 px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-6 mt-6 max-w-6xl">
        <div
          v-for="categoryProduct in products"
          :key="categoryProduct[0].foodId"
          class="flex flex-col gap-6 pt-16"
          :id="categoryProduct[0].category"
          ref="categoryRef"
        >
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            {{ CategoryConstants[categoryProduct[0].category[0] as TCategory] }}
          </h2>
          <div
            v-for="product in categoryProduct"
            :key="product.foodId + product.priceOfFood"
            class="grid grid-cols-4 group relative divide-y divide-slate-200 w-full"
          >
            <ProductItem :product="product"></ProductItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onUnmounted, onMounted, ref } from "vue";

import { useProductStore } from "@/stores/product/product";

import ProductItem from "./ProductItem.vue";
import { CategoryConstants, navigation } from "../NavBar/NavBar.helpers";
import type { TCategory } from "../NavBar/NavBar.helpers";
import ProductCategories from "./ProductCategories.vue";

const productStore = useProductStore();
const categoryRef = ref(null);
const { products } = storeToRefs(productStore);

const activeCategory = ref<string | null>(null);

onMounted(() => {
  window.addEventListener("scroll", handleActiveCategory);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleActiveCategory);
});

const handleActiveCategory = () => {
  if (!activeCategory.value) {
    // Set the first category as Active Category
    activeCategory.value = navigation.categories[0].id;
  }
  const categories = categoryRef.value as unknown as HTMLElement[];
  categories.forEach((categoryElement) => {
    const categoryElementToTop = categoryElement.offsetTop;
    if (scrollY > categoryElementToTop) {
      activeCategory.value = categoryElement.getAttribute("id");
    }
  });
};
</script>
