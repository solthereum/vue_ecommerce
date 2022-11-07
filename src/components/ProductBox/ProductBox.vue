<template>
  <div class="bg-white container">
    <div class="mx-auto max-w-lg py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Item List</h2>

      <div class="flex flex-col gap-6 mt-6">
        <div
          v-for="product in products"
          :key="product.foodId"
          class="grid grid-cols-4 group relative divide-y divide-slate-200 w-full"
        >
          <div
            class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none"
          >
            <img
              :src="product.foodImage.url"
              :alt="product.foodImage.title"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="container pl-4 col-span-3">
            <div
              @click="addItemToCart"
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
              <!-- <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p> -->
            </div>
            <div>
              <p class="antialiased line-clamp-3">
                {{ product.descriptionAboutFood }}
              </p>
            </div>
            <p class="text-sm font-bold text-rose-600">
              €{{ product.priceOfFood }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div ref="refDiv">ref Div</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useProductStore } from "@/stores/product";
import { onUnmounted, onMounted, ref } from "vue";

const productStore = useProductStore();
const refDiv = ref(null);

const { products } = storeToRefs(productStore);

const addItemToCart = (e: Event) => {
  e.stopPropagation();
  e.stopImmediatePropagation();
  console.log("adding to cart");
};

onMounted(() => {
  //@ts-ignore
  // eslint-disable-next-line vue/no-ref-as-operand

  console.log({ refDiv: refDiv.value.innerHTML });
  window.addEventListener("scroll", notice);
});

onUnmounted(() => {
  window.removeEventListener("scroll", notice);
});

const notice = () => {
  console.log("hallo", products);
};
</script>
