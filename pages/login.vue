<template>
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto">
    <div v-if="_error">
      <p class="bg-red-500 text-red-200 text-sm p-3 mb-5">
        {{ _error }}
      </p>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="form-group mb-6">
        <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">Email address</label>
        <input v-model="form.email" type="email" class="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
          aria-describedby="emailHelp" placeholder="Enter email">

      </div>
      <div class="form-group mb-6">
        <label for="exampleInputPassword2" class="form-label inline-block mb-2 text-gray-700">Password</label>
        <input v-model="form.password" type="password" class="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
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
definePageMeta({
  layout: 'default'
})
useHead({
  title: 'Login ',
  meta: [{ name: 'Login', content: 'Login' }],
  bodyAttrs: { class: 'Index' },

});

const isLoading = ref(false);
const _error = ref(null);
const form = reactive({
  email: "mjahid1990@gmail.com",
  password: "admin12345",
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
  console.log(auth),
  navigateTo("/");
}

</script>