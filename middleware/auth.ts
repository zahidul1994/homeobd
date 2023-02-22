export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth();
  return auth.value.isAuthenticated;
//  if (!auth.value.isAuthenticated) {  
//       return navigateTo('/login') 
//      }
//      else{
//       return auth.value.isAuthenticated;
//      }
});