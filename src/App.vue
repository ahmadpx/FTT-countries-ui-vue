<template>
  <div id="app">
    <Layout>
      <Filters :store="store" />
      <CountriesList :store="store" />
    </Layout>
    <FrameworkPadge>
      <img src="./assets/logo.png" alt />
    </FrameworkPadge>
  </div>
</template>

<script>
import CountriesList from "./components/CountriesList";
import Filters from "./components/Filters";
import { store } from "./store";
import { Layout, FrameworkPadge } from "./app.styles";

export default {
  name: "app",
  components: {
    CountriesList,
    Filters,
    Layout,
    FrameworkPadge
  },
  data() {
    return {
      store
    };
  },
  mounted() {
    store.countriesStore.fetch();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Ubuntu&display=swap");
body {
  font-family: "Ubuntu", sans-serif;
  background: rgba(0, 0, 0, 0.02);
}
#app {
  display: flex;
}
</style>
