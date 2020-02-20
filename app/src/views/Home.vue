<template>
  <div>
    <div class="topnav">
      <a href="cs341-project-ss2020-python/app/public/index.html">
        <img border="0" alt="Home Page" src="@/assets/images/logo_button.jpeg" width="250" height="50" />
      </a>
      <a href="#demo" id="sec_button">Demo</a>
      <a href="#news" id="sec_button">News</a>
      <a href="#about" id="sec_button">About Us</a>
      <a href="#contact" id="sec_button">Contact Us</a>
      <div class="searchbar">
        <input type="text" placeholder="Search..." id="search-text-input" />
        <div id="button-holder">
          <img src="@/assets/images/mag_glass.png" />
        </div>
      </div>
    </div>

    <!-- insert image here -->

    <!--<textarea rows="1" cols="100" placeholder="Search..."></textarea>-->
    <!-- https://www.codeofaninja.com/2014/03/textbox-with-search-icon-in-html-css.html -->

    <div class="container">
      <img id="bg" src="@/assets/images/background.jpeg" />
      <img id="logo" src="@/assets/images/logo.png" width="500" height="100" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped src="@/assets/style/ppp.css">
</style>