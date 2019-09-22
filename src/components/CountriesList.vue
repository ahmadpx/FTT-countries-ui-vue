<template>
  <ul>
    <li v-for="country in countries" :key="country.value">
      {{ country.name }}
    </li>
  </ul>
</template>

<script>
import { autorun } from "mobx";
export default {
  name: "CountriesList",
  props: {
    store: Object
  },
  data() {
    return {
      countries: []
    };
  },
  mounted() {
    autorun(() => {
      this.countries = this.store.countriesList;
    });
  }
};
</script>

<style scoped></style>
