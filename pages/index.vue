<template>

<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-1">
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md shadow dark:bg-gray-800 dark:border-gray-700" v-for="dise in homeInfo.diseasesInfo[0]">
    <NuxtLink :to="`/disease/${dise.slug}`">
        <nuxt-img format="webp" loading="lazy" class="max-w-full h-auto" :src="useRuntimeConfig().imageUrl+'disease/' +dise.diseaseimage"  :alt="dise.diseasename"  />
    </NuxtLink>
    <div class="p-5">
      <NuxtLink :to="`/disease/${dise.slug}`">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{{ dise.diseasename }}</h5>
        </NuxtLink>
        <div class="mb-3 font-normal text-gray-700 dark:text-gray-400" v-html="dise.description"></div>
        <NuxtLink :to="`/disease/${dise.slug}`" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </NuxtLink>
    </div>
  </div>


  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md  shadow dark:bg-gray-800 dark:border-gray-700" v-for="medicine in homeInfo.medicineInfo">
    <NuxtLink :to="`/disease/${medicine.slug}`">
        <nuxt-img format="webp" loading="lazy" class="max-w-full h-auto" :src="useRuntimeConfig().imageUrl+'medicine/' +medicine.medicineimage"  :alt="medicine.medicinename"  />
    </NuxtLink>
    <div class="p-5">
      <NuxtLink :to="`/medicine/${medicine.slug}`">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{{ medicine.medicinename }}</h5>
        </NuxtLink>
        
    </div>
  </div>
</div><!--Card 1-->
</template>
<script setup>
definePageMeta({
  layout:'default'
})
useHead({  title: 'হোমিও বিডি', 
 meta: [    { name: 'description', content: 'হোমিও সফটওয়্যার ও হোমিও সম্পর্কিত সকল সেবা' }  ], 
  bodyAttrs: {    class: 'Index'  }, 
  
});

   const homeInfo = await useFetch(useRuntimeConfig().baseUrl+'/index').then((homeInfo) => {
return homeInfo.data.value
});
</script>


