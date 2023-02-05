<template>
  
<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-1">
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" v-for="dise in homeInfo.diseasesInfo[0]">
    <NuxtLink :to="`/disease/${dise.slug}`">
        <img class="rounded-t-lg" :src="useRuntimeConfig().imageUrl+'disease/' +dise.diseaseimage"  alt="{{ dise.disease }}" />
    </NuxtLink>
    <div class="p-5">
      <NuxtLink :to="`/disease/${dise.slug}`">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ dise.diseasename }}</h5>
        </NuxtLink>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ dise.description }}</p>
        <NuxtLink :to="`/disease/${dise.slug}`" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </NuxtLink>
    </div>
</div>
    <!--Card 1-->
   
  </div>


</template>
<script setup>

useHead({  title: 'Homeo BD', 
 meta: [    { name: 'description', content: 'Homeo BD' }  ], 
  bodyAttrs: {    class: 'Index'  }, 
  
});
   const homeInfo = await useFetch(useRuntimeConfig().baseUrl+'/index').then((homeInfo) => {
return homeInfo.data.value
});
</script>


