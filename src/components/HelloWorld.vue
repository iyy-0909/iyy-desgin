<template>
  <div class="hello">
   <div class="time-box">
    <date-time :styleObj="styleObj"> </date-time>
   </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      styleObj:{
        fontSize: 25,
        color: ["#dcedff", "#5ca9ff"]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
