<template>
  <div
    class="min-h-80 aspect-w-1 p-2 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none"
  >
    <img
      :src="product.foodImage.url"
      :alt="product.foodImage.title"
      class="h-full w-full object-cover object-center lg:h-full lg:w-full"
    />
  </div>
  <div class="container p-2 col-span-3 flex flex-col justify-evenly lg:p-8">
    <div
      @click="addItemAction(product)"
      class="absolute top-0 right-0 z-10 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
    <div>
      <h3 class="text-lg font-medium text-gray-700">
        <!-- <a :href="product.href"> -->
        <span aria-hidden="true" class="absolute inset-0" />
        {{ product.foodName }}
        <!-- </a> -->
      </h3>
    </div>
    <div>
      <p class="antialiased line-clamp-3">
        {{ product.descriptionAboutFood }}
      </p>
    </div>
    <p class="text-sm font-bold text-rose-600">€{{ product.priceOfFood }}</p>
  </div>
</template>
<script setup lang="ts">
import type { IProductItem } from "@/@type";
import { useBasketStore } from "@/stores/basket/basket";

const basketStore = useBasketStore();
const { addItemAction } = basketStore;

defineProps<{ product: IProductItem }>();
</script>
<script lang="ts"></script>

<style></style>
