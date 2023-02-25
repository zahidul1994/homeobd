<template>
 <div class="p-10 grid grid-cols-1  gap-1">
      <!--Card 1-->
    <div class="bg-white border border-gray-200 rounded-lg shadow-md bg-white border border-gray-200 rounded-lg shadow-md shadow dark:bg-gray-800 dark:border-gray-700">
      <nuxt-img format="webp" loading="lazy" class="mx-auto h-auto rounded mt-1"  :src="useRuntimeConfig().imageUrl+'medicine/' +medicineInfo.medicineimage" :alt="medicineInfo.medicinename" />
        <div class="px-6 py-4">
          <h1 class="font-bold  text-gray-900 dark:text-white text-xl mb-2 text-center">{{ medicineInfo.medicinename }}</h1>
            <div class=" mb-3 font-normal text-gray-700 dark:text-gray-400" v-html="medicineInfo.description"></div>
        </div>
       
      </div>
       <div v-if="pending">    Loading ...  </div>
    <div class="pt-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-1" v-else>
    <div class="bg-white border border-gray-200 rounded-lg shadow-md shadow dark:bg-gray-800 dark:border-gray-700" v-for="med in recentMedicine.data">
      <NuxtLink :to="`/medicine/${med.slug}`">
          <nuxt-img format="webp" loading="lazy" class="max-w-full h-auto" :src="useRuntimeConfig().imageUrl+'medicine/' +med.medicineimage"  :alt="med.medicinename"  />
      </NuxtLink>
      <div class="p-5">
        <NuxtLink :to="`/medicine/${med.slug}`">
              <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white text-center">{{ med.medicinename }}</h5>
          </NuxtLink>
          
      </div>
     </div>
    </div> 
  </div>
   </template>



<script setup>


useHead({
  title: useRoute().params.slug,
  meta: [
    {
      name: 'description',
      content: useRoute().params.slug,
    }],


});
useSchemaOrg([
  defineWebSite({
    name: useRoute().params.slug,
  }),
  defineWebPage(),
]);

const medicineInfo = await useFetch(useRuntimeConfig().baseUrl + `/medicine/${encodeURI(useRoute().params.slug)}`).then((medicineInfo) => {
  return medicineInfo.data.value.medicine;

});
const { pending, data: recentMedicine } = await useLazyFetch(useRuntimeConfig().baseUrl + '/recent-medicine');
</script>