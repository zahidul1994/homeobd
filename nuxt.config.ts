
export default defineNuxtConfig({
  devServerHandlers: [],
    components: true,
    app: {
      head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        meta: [
            { property: "og:type", content: 'Website' },
            { property: "og:site_name", content: "Homeo BD" },
            { property: "fb:app_id", content: "288667377910255" }
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
          '@pinia/nuxt',
          '@nuxtjs/web-vitals',
          'nuxt-schema-org'
         ],
          schemaOrg: {
            host: 'https://homeobd.com',
          },

      webVitals: {  
          ga: { id: 'G-X89S389C53' } 
         },
        runtimeConfig: {
          
          public: {
              baseUrl: process.env.Base_Url,
              imageUrl: process.env.Image_Url,
          },
        },
      
       
         
})
