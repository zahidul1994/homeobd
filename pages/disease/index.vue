<template>
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-1">
    <div
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md shadow dark:bg-gray-800 dark:border-gray-700"
      v-for="dise in disease" :key="dise.id">
      <NuxtLink :to="`/disease/${dise.slug}`">
        <nuxt-img format="webp" loading="lazy" class="max-w-full h-auto"
          :src="useRuntimeConfig().imageUrl + 'disease/' + dise.diseaseimage" :alt="dise.diseasename" />
      </NuxtLink>
      <div class="p-5">
        <NuxtLink :to="`/disease/${dise.slug}`">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ dise.diseasename }}</h5>
        </NuxtLink>
        <NuxtLink :to="`/disease/${dise.slug}`"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
        </NuxtLink>
      </div>
    </div>

    <InfiniteLoading @infinite="load" />

  </div>
<!--Card 1--></template>
<script setup>
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
definePageMeta({
  layout: 'default'
})
useHead({
  title: 'রোগ  লিস্ট ',
  meta: [{ name: 'রোগ', content: 'মানব দেহের রোগ সমূহ' }],
  bodyAttrs: { class: 'Index' },

});

let disease = ref([]);
let page = 1;
const load = async $state => {
 try {

    const response = await fetch(useRuntimeConfig().baseUrl + '/disease?page=' + page);

    const json = await response.json();
    if (json.data.length <12) $state.complete();
    else {
      disease.value.push(...json.data);
      $state.loaded();
    }
    page++;
  } catch (error) {
    $state.error();
  }
};

</script>
  
    
    