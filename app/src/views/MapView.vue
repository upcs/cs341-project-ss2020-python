<template>
  <div>
    <h1 id="logo">Portland Python Pollution</h1>
    <table id="nav">
      <tr>
        <th>
          <div id="hamburger"></div>
          <div id="hamburger"></div>
          <div id="hamburger"></div>
        </th>
        <th>
          <input type="text" placeholder="Search..." id="search-text-input" />
          <div id="button-holder">
            <img src="@/assets/images/mag_glass.png" />
          </div>
        </th>

        <th>
          <button id="nav_button" onclick="process_demo()">Demo</button>
        </th>
        <th>
          <button id="nav_button" onclick="process_demo()">About Us</button>
        </th>
        <th>
          <button id="nav_button" onclick="process_demo()">Contact Us</button>
        </th>
      </tr>
    </table>
    <h2 id="comparemaps">Compare Maps</h2>
    <div class="mapSelectDropdowns">
      <select id="mapSelect1">
        <option value="1">Portland</option>
        <option value="2">Seattle</option>
        <option value="3">Boise</option>
        <option value="4">Vancouver</option>
        <option value="5">Salem</option>
        <option value="6">Eugene</option>
      </select>
      <select id="mapSelect2">
        <option value="1">Corvallis</option>
        <option value="2">Beaverton</option>
        <option value="3">Ashland</option>
        <option value="4">Chicago</option>
        <option value="5">Hillboro</option>
        <option value="6">Tualitin</option>
      </select>
    </div>
    <div class="container">
      <div id="left" style="border:1px solid #000;"></div>
      <!--image source: https://www.lonelyplanet.com/maps/north-america/usa/portland/
      <img src="@/assets/images/map_of_portland.jpg" style = "width:180px; height:160px;">-->
      <div id="right" style="border:1px solid #000;"></div>
      <!--image source: https://westseattleblog.com/2018/08/west-seattle-power-outage-9/
      <img src="@/assets/images/841outageJ.jpg" style = "width:180px; height:160px;">-->
    </div>
  </div>
</template>

<script>
export default {
  name: "MapView"
};
</script>

<style scoped src="@/assets/style/ppp.css">
</style>