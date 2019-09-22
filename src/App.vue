<template>
  <div id="app">
    <Filters :store="store" />
    <CountriesList :store="store" />
  </div>
</template>

<script>
import CountriesList from "./components/CountriesList";
import Filters from "./components/Filters";
import { store } from "./store";

export default {
  name: "app",
  components: {
    CountriesList,
    Filters
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
#app {
  display: flex;
}
</style>
