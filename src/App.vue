<template>
  <div id="app">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Ragnarok Mobile Cookbook</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/pumano">
            <img
              src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
              alt="Buy me a coffee"
            >
            <span style="margin-left:5px">Buy me a coffee</span>
          </a>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/" exact>Recipes</v-btn>
        <v-btn flat to="/ingredients" exact>Ingredients</v-btn>
        <v-btn icon>
          <a href="https://github.com/pumano/ragnarok-mobile-cookbook" target="_blank">
            <img src="../public/github.png" height="35">
          </a>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.bmc-button img {
  width: 27px !important;
  margin-bottom: 1px !important;
  box-shadow: none !important;
  border: none !important;
  vertical-align: middle !important;
}
.bmc-button {
  line-height: 36px !important;
  height: 37px !important;
  text-decoration: none !important;
  display: inline-flex !important;
  color: #ffffff !important;
  background-color: #ff813f !important;
  border-radius: 3px !important;
  border: 1px solid transparent !important;
  padding: 1px 9px !important;
  font-size: 22px !important;
  letter-spacing: 0.6px !important;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  margin: 0 auto !important;
  font-family: "Cookie", cursive !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
  -o-transition: 0.3s all linear !important;
  -webkit-transition: 0.3s all linear !important;
  -moz-transition: 0.3s all linear !important;
  -ms-transition: 0.3s all linear !important;
  transition: 0.3s all linear !important;
}
.bmc-button:hover,
.bmc-button:active,
.bmc-button:focus {
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  text-decoration: none !important;
  box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  opacity: 0.85 !important;
  color: #ffffff !important;
}
</style>


