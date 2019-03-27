<template>
  <div id="app">
    <FlashMessage />
    <div id="header-nav" class="nav-bars">
      <div class="nav-design">
        <router-link class="routerLink" to="/home">Home</router-link>
        <router-link class="routerLink routerLinkBorder" to="/uploads"
          >Uploads</router-link
        >
        <router-link class="routerLink routerLinkBorder" to="/recommender"
          >Recommender</router-link
        >
      </div>
    </div>
    <div class="router-wrap">
      <router-view />
    </div>
    <div id="footer-nav" class="routerLink nav-bars">READ Toolkit</div>
  </div>
</template>

<script>
import FlashMessage from "./components/flash/FlashMessage";
export default {
  components: { FlashMessage }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
a,
p,
span {
  margin: 0;
}

.router-wrap {
  margin: 50px 0px 60px 0;
}

.routerLink {
  font-weight: 700;
  background: cornflowerblue;
  color: white;
}

.router-link-active {
  background: white !important;
  color: cornflowerblue !important;
}

.routerLinkBorder {
  border-left: 2px solid white;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;

  .nav-bars {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    width: 100%;

    .nav-design {
      width: 40%;
      height: 100%;
      align-items: center;
      display: flex;
      justify-content: space-around;
    }

    a {
      color: white;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-decoration: none;
    }
    a:hover {
      background-color: white;
      color: cornflowerblue;
      cursor: pointer;
    }
  }

  #header-nav {
    background-color: cornflowerblue;

    height: 50px;
    top: 0;
    left: 0;
  }

  #footer-nav {
    height: 50px;
  }
}
</style>
