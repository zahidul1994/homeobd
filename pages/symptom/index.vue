<template>
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-1">
    <div
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md shadow dark:bg-gray-800 dark:border-gray-700"
      v-for="sym in symptom" :key="sym.id">
      <div class="p-5">
          <h2 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{{ sym.symptom }}</h2>
          
          <div  v-for=" dis in JSON.parse(sym.medicines)" :key="dis.id"><NuxtLink class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" >
            {{ dis }}
    </NuxtLink></div>
      
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
  title: 'লক্ষন বা  উপসর্গ',
  meta: [{ name: 'রোগ', content: 'মানব দেহের বিভিন্ন রোগের লক্ষন বা  উপসর্গ' }],
  bodyAttrs: { class: 'Index' },

});

useSchemaOrg([
  defineWebSite({
    name: useRoute().params,
  }),
  defineWebPage(),
]);
let symptom = ref([]);
let page = 1;
const load = async $state => {
 try {

    const response = await fetch(useRuntimeConfig().baseUrl + '/symptom?page=' + page);

    const json = await response.json();
    if (json.data.length <12) $state.complete();
    else {
      symptom.value.push(...json.data);
      $state.loaded();
    }
    page++;
  } catch (error) {
    $state.error();
  }
};

</script>
  
    
    