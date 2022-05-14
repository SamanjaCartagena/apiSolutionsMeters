const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies:  ['vuex-persist'],
})
module.exports={
    
  /* ... other config ... */

        
  devServer:{

         proxy: {
      '^/api': {
        target: 'http://localhost:4000/',
        ws: true,
        changeOrigin: true
      },
    

         },
         
  },

        }
   

