<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <!-- <router-view /> -->

  screenMode:
  <span class="common" v-bind:class="{
    'class-for-PC': $store.state.screenMode === 'PC',
    'class-for-Tablet': $store.state.screenMode === 'Tablet',
    'class-for-SmartPhone': $store.state.screenMode === 'SmartPhone',
  }">
    {{ $store.state.screenMode }}

    <ul class="sample-list">
      <li>List1</li>
      <li>List2</li>
      <li>List3</li>
    </ul>

  </span>
</template>

<script>
import { onMounted, defineComponent } from "vue";
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()

    // Set thresholds for each screen size here
    let mqls = [
      // SmartPhone
      window.matchMedia("(max-width: 600px)"),
      // Tablet
      window.matchMedia("(max-width: 1024px)"),
      // PC
      window.matchMedia("(max-height: 2000px)")
    ]

    // Only executed when the screen size crosses the threshold.
    const handleMediaQuery = function () {
      if (mqls[0].matches) {
        // Processing for SmartPhone
        store.dispatch('setScreenModeAction', "SmartPhone")
      }
      else if (mqls[1].matches) {
        // Processing for Tablet
        store.dispatch('setScreenModeAction', "Tablet")
      }
      else {
        // Processing for PC
        store.dispatch('setScreenModeAction', "PC")
      }
    };
    onMounted(() => {
      for (let i = 0; i < mqls.length; i++) { // loop through queries
        // Add event listeners (monitor media queries for matches)
        mqls[i].addEventListener("change", () => {
          handleMediaQuery();
        });
        // Execute function once for initial check
        handleMediaQuery();
      }
    })
  }
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.common {
  font-size: 30px;
}

.sample-list {
  list-style: none;
}

.class-for-PC {
  color: red;
}

.class-for-Tablet {
  color: green;
}

.class-for-SmartPhone {
  color: blue;
}
</style>
