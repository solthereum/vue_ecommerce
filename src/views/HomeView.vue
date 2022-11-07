<script setup lang="ts">
import ProductBox from "../components/ProductBox/ProductBox.vue";
</script>
<script lang="ts">
export default {
  props: ["products"],
  // data () {
  //   return {
  //    }
  // }
};
</script>

<template>
  <main>
    <ProductBox :products="products"></ProductBox>
  </main>
</template>
