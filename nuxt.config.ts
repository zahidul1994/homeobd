
export default defineNuxtConfig({
  devServerHandlers: [],
  // components: true,
    app: {
      head: {
        charset: 'utf-8',
        viewport: 'width=500, initial-scale=1',
        title: 'Homeo BD',
        meta: [
          // <meta name="description" content="My amazing site">
          { name: 'description', content: 'First Bangla Homeo Software' }
        ],
      },
       pageTransition: { name: 'page', mode: 'out-in' }  ,
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
          // '@nuxtjs/moment'
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
