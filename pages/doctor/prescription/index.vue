<template>
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto">
    <div v-if="_error">
      <p class="bg-red-500 text-red-200 text-sm p-3 mb-5">
        {{ _error }}
      </p>
    </div>
    <form @submit.prevent="onSubmit">
      
      <div class="form-group mb-6">
        <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">Select Disease</label>
        <v-select  multiple v-model="form.disease" :options="diseaseinfo" label=diseasename :reduce="diseasename=>diseasename.diseasename" required id="diseasename"  ></v-select> 
      </div>
     
      <div class="form-group mb-6">
        <label for="exampleInputPassword2" class="form-label inline-block mb-2 text-gray-700">Password</label>
        <input v-model="form.password" type="password" class="form-control e" id="exampleInputPassword2"
          placeholder="Password">

      </div>

      <button type="submit" class="
    w-full
    px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out">Sign in</button>
   
    </form>

    
    <span v-if="isLoading">Loading...</span>
    <span v-else>Sign in</span>
  </div>
</template>
  
  <script setup>
 import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select'
  definePageMeta({
   layout: "doctor",
   middleware: "auth",
   });
  useHead({
  title: 'doctor ',
  meta: [{ name: 'doctor', content: 'doctor' }],


});

const  diseaseinfo = await $fetch(useRuntimeConfig().baseUrl+'/alldiseasename');
const isLoading = ref(false);
const _error = ref(null);
const form = reactive({
  email: "mjahid1990@gmail.com",
  password: "admin1234",
});
async function onSubmit() {
  if (isLoading.value) return;
  isLoading.value = true;
  const { data, error } = await useFetch(useRuntimeConfig().baseUrl+'/login', {
    method: "post",
    body: form,
  });
  isLoading.value = false;
  if (error.value) {
    _error.value = error.value.data.error;
    return;
  }
  
  const auth = useAuth();
  auth.value.isAuthenticated = true;

  navigateTo("/doctor");
}

</script>