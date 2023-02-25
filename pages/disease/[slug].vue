<template>
 <div class="p-10 grid grid-cols-1  gap-1">
    <!--Card 1-->
    <div class="bg-white border border-gray-200 rounded-lg shadow-md bg-white border border-gray-200 rounded-lg shadow-md shadow dark:bg-gray-800 dark:border-gray-700">
      <nuxt-img format="webp" loading="lazy" class="mx-auto h-auto rounded mt-1"
        :src="useRuntimeConfig().imageUrl + 'disease/' + diseaseInfo.diseaseimage" :alt="diseaseInfo.diseasename" />
      <div class="px-6 py-4">
        <h1 class="font-bold  text-gray-900 dark:text-white text-xl mb-2 text-center">{{ diseaseInfo.diseasename }}</h1>
        <div class=" mb-3 font-normal text-gray-700 dark:text-gray-400" v-html="diseaseInfo.description"></div>
      </div>

    </div>
    <div v-if="pending"> Loading ... </div>
    <div class="pt-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-1" v-else>
      <div class="bg-white border border-gray-200 rounded-lg shadow-md shadow dark:bg-gray-800 dark:border-gray-700"
        v-for="dise in recentDisease.data">
        <NuxtLink :to="`/disease/${dise.slug}`">
          <nuxt-img format="webp" loading="lazy" class="max-w-full h-auto"
            :src="useRuntimeConfig().imageUrl + 'disease/' + dise.diseaseimage" :alt="dise.diseasename" />
        </NuxtLink>
        <div class="p-5">
          <NuxtLink :to="`/disease/${dise.slug}`">
            <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white text-center">{{
              dise.diseasename }}</h5>
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

const diseaseInfo = await useFetch(useRuntimeConfig().baseUrl + `/disease/${encodeURI(useRoute().params.slug)}`).then((diseaseInfo) => {
  return diseaseInfo.data.value.disease

});
const { pending, data: recentDisease } = await useLazyFetch(useRuntimeConfig().baseUrl + '/recent-disease');
</script>