<template>
  <ul class="divide-y divide-gray-200">
    <!-- <li v-for="person in people" :key="person.email" class="py-4 flex">
      <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
        <p class="text-sm text-gray-500">{{ person.email }}</p>
      </div>
    </li> -->
  </ul>
  <p ref="wasRef">Hello Ref</p>
</template>
<script setup lang="ts">
export interface IPeople {
  name: string;
  email: string;
  image: string;
}
// const wasRef1 = ref();
// const props = defineProps<{
//   people: IPeople[];
// }>();
// onMounted(function () {
//   console.log("mounted");
// });
console.log("setuppp...");
// export default {
//   // data() {
//   //   people
//   // }

//   // setup() {
//   //   console.log('setuppp....')
//   // },

//   // mounted() {
//   //   console.log(this)
//   // }
// };
</script>
<style scoped></style>
