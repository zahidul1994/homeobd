<template>
<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mx-auto">
  <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full"  :src="useRuntimeConfig().imageUrl+'disease/' +symptomInfo.disease.diseaseimage" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ symptomInfo.disease.diseasename }}</div>
          <div class="text-gray-700 text-base" v-html="symptomInfo.disease.description"></div>
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
          
    const symptomInfo = await useFetch(useRuntimeConfig().baseUrl+`/symptom/${encodeURI(useRoute().params.slug)}`).then((symptomInfo) => {
     return symptomInfo.data.value.symptom
   
    });
       
    </script>