<template>
  <div>
    <h2>Filters</h2>

    <button @click="resetAllFilters()">reset all filters</button>

    <FilterGroup
      title="languages"
      :filter-data="filters.languages"
      :is-selected-filter="isSelectedFilter"
      :toggle-filter="toggleFilter"
    />

    <FilterGroup
      title="currencies"
      :filter-data="filters.currencies"
      :is-selected-filter="isSelectedFilter"
      :toggle-filter="toggleFilter"
    />

    <FilterGroup
      title="regions"
      :filter-data="filters.regions"
      :is-selected-filter="isSelectedFilter"
      :toggle-filter="toggleFilter"
    />
  </div>
</template>

<script>
import { autorun } from "mobx";
import FilterGroup from "./FilterGroup";

export default {
  name: "Filters",
  components: {
    FilterGroup
  },
  props: {
    store: Object
  },
  data() {
    return {
      filters: {}
    };
  },
  methods: {
    toggleFilter(filter) {
      return this.store.toggleFilter(filter);
    },
    resetAllFilters() {
      return this.store.resetAllFilters();
    },
    isSelectedFilter(filter) {
      this.store.isSelectedFilter(filter);
    }
  },
  mounted() {
    autorun(() => {
      this.filters = this.store.countriesStore.filters;
    });
  }
};
</script>

<style scoped></style>
