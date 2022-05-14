<template>
<div>
 

<div v-for="(value, name, index) in gaugeNames" :key="name">
  <hr/>
<h4 style="color:red">
The names and values are {{name}} ||{{value.value[0]}} ||{{index}}||{{value.dates[0]}}
</h4>
<hr/>
</div>

<h3>{{this.$store.state.name}}</h3>
</div>
 
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',

  data(){
    return{
   contents:'',
   names:'', 
    
    gaugeNames:'', barChartData:''
    }
  },
  components: {
  },
  async created(){
    try{
      await axios.get('/api/').then(response => this.contents=response.data)
      .catch(error=> console.log(error))
     // console.log(this.contents)
       this.gaugeNames=this.contents.apexGaugeChartData;
      this.barChartData= this.contents.apexBarChartData;
       console.log("Gauge names are ")
        console.table(this.gaugeNames)
        console.log("Bar chart data is")
        console.table(this.barChartData)
         
    }catch(err){
      console.log(err);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
