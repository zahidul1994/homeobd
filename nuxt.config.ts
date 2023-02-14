
export default defineNuxtConfig({
  devServerHandlers: [],
    components: true,
    app: {
      head: {
        charset: 'utf-8',
        viewport: 'width=500, initial-scale=1',
        title: 'Homeo BD',
        meta: [
         { name: 'description', content: 'First Bangla Homeo Software' }
        ],
      },
      
    },

  
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      alias:{
assets:"/<rootDir></rootDir>"
      },
      
    
  
        modules: [
          '@nuxt/image-edge',
        ],
        build: {
          transpile: ['vform']
      },
        runtimeConfig: {
          
          public: {
              baseUrl: process.env.Base_Url,
              imageUrl: process.env.Image_Url,
          },
        },
        
      
       
         
})
