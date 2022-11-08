<template>
  <header class="sticky -top-1 z-30 relative bg-white">
    <nav aria-label="Top" class="mx-auto max-w-7xl">
      <div class="border-b border-gray-200">
        <div class="flex h-16 items-center justify-between">
          <div class="ml-4 flex lg:ml-0">
            <span class="sr-only">Gao Vegan</span>
          </div>
          <PopoverGroup class="hidden lg:px-4 lg:block lg:self-stretch">
            <div class="flex h-full">
              <a
                v-for="page in navigation.categories"
                :key="page.name"
                :href="'#' + page.id"
                class="flex lg:px-4 items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                :class="activeCategory === page.id && 'active-category'"
                >{{ page.name }}</a
              >
            </div>
          </PopoverGroup>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { PopoverGroup } from "@headlessui/vue";

import { navigation } from "../NavBar/NavBar.helpers";
export interface INavigation {
  categories: {
    id: string;
    name: string;
  }[];
}
defineProps<{ activeCategory: string | null }>();
</script>

<style scoped>
.active-category {
  color: #f88888;
}
</style>
