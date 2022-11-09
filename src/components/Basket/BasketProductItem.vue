<template>
  <div class="p-1">
    <div class="flex justify-between">
      <p>
        <span class="font-bold pr-1"> {{ product.productQuantity }} </span
        >{{ product.productTitle }}
      </p>
      <p class="font-bold text-rose-600">
        <span class="total-price">€</span
        >{{ Number(product.prodctPrice * product.productQuantity).toFixed(2) }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IProductItemInCart } from "@/@type";

defineProps<{
  product: IProductItemInCart;
}>();
</script>
<style scoped>
.total-price {
  padding-right: 2px;
}
</style>
