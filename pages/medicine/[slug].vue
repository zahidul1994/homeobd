<template>

<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <!--Card 1-->
   <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full"  :src="useRuntimeConfig().imageUrl+'medicine/' +medicineInfo.medicineimage" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ medicineInfo.medicinename }}</div>
          <div class="text-gray-700 text-base" v-html="medicineInfo.description"></div>
      </div>
      <div class="px-6 pt-4 pb-2">
        <NuxtLink class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" :to="`/disease/${medicineInfo.slug}`">
          {{ medicineInfo.medicinename }}
    </NuxtLink>
       
       
      </div>
    </div>
  </div>
    
    
    </template>
    <script setup>

    useHead({  title: useRoute().params.slug, 
     meta: [   
       {
         name: 'description', 
         content: 'Homeo BD'
       }  ], 
     
      
    });
          
    const medicineInfo = await useFetch(useRuntimeConfig().baseUrl+`/medicine/${encodeURI(useRoute().params.slug)}`).then((medicineInfo) => {
     return medicineInfo.data.value.medicine
   
    });
       
    </script>