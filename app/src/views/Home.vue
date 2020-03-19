<template>
  <div class="background">
    <div class="topnav"></div>
     <div class="container">
      <img id="bg" src="@/assets/images/background.jpeg"/>
      <img id="logo" src="@/assets/images/logo.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
    };

</script>

<style lang="scss">
// .background{
//   background-color: #333;
//   text-align: center;
//   margin: var(0);
//   height: 100%;
//   width: auto;
//   background-repeat: no-repeat;
// }
// .container{
//   position: relative;
// }
body {
  margin: 0;
  padding: 0;
}
 #bg{
   height: 93.4vh;
   width: 100%;
   background-position: center;
   margin: 0;
   position: absolute;
  left: 0;
  top: 0;
  }
 #logo{
   position: absolute;
   margin-top: 1em;
   margin-left: 20em;
   margin-right: 25em;
  //  left: 20em;
  //  right: 20em;
   width: 38em;
   height: 8em;
 }
</style>