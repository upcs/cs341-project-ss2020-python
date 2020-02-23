<template>
   <div id="app">
    <div id="topnav">
      <a><router-link to="/"><img border="0" alt="Home Page" src="@/assets/images/logo_button.jpeg" width="250" height="50"/></router-link></a>
      <a id="sec_button"><router-link to="/demo">Demo</router-link></a>
      <a id="sec_button"><router-link to="/news">News</router-link></a>
      <a id="sec_button"><router-link to="/info">About Us</router-link></a>
      <a id="sec_button"><router-link to="/contact">Contact Us</router-link></a>
      <div class="searchbar">
        <input type="text" placeholder="Search..." id="search-text-input" />
        <div id="button-holder">
          <img src="@/assets/images/mag_glass.png" />
        </div>
      </div>
      <!-- <ul id="navBar">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/map">Map</router-link></li>
        <li><router-link to="/info">Info</router-link></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#topnav {
  overflow: hidden;
	background-color: #333;
  a {
    // font-weight: bold;
    // color: #2c3e50;

    // &.router-link-exact-active {
    //   color: #42b983;
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    $font-family: Arial, Helvetica, sans-serif;
    position: relative;
    }
  a:hover {
    background-color: #ddd;
    color: black;
  }
  a.active {
    background-color: #4CAF50;
    color: white;
  }
}
#sec_button {
  position: relative;
  top: var(15px);
}
.searchbar {
  position: relative;
  top: var(20px);
  left: var(5px);
  text-decoration: none;
  font-size: 17px;
  $font-family: Arial, Helvetica, sans-serif;
}
#search-text-input{
	border-top:thin solid  #e5e5e5;
    border-right:thin solid #e5e5e5;
    border-bottom:0;
    border-left:thin solid  #e5e5e5;
    box-shadow:0px 1px 1px 1px #e5e5e5;
    float:left;
    height: var(20px);
    margin:auto; 
    outline:0;
    padding:.4em 0 .4em .6em; 
    width: var(183px);
}
#button-holder{
    background-color:var(#f1f1f1);
    border-top:thin solid #e5e5e5;
    box-shadow:1px 1px 1px 1px #e5e5e5;
    cursor:pointer;
    float:left;
    height: var(27.5px);
    margin: auto;
    text-align:center;
    width: var(50px);
}
#button-holder img{
    margin: var(4px);
    width: var(20px); 
}
</style>