<template>
  <div>
    <h2>Filters</h2>

    <button @click="resetAllFilters()">reset all filters</button>

    <FilterGroup
      title="languages"
      :filter-data="filters.languages"
      :is-selected-filter="isSelectedFilter"
      :toggle-filter="toggleFilter"
      :filters-state="filtersState"
    />

    <FilterGroup
      title="currencies"
      :filter-data="filters.currencies"
      :is-selected-filter="isSelectedFilter"
      :toggle-filter="toggleFilter"
      :filters-state="filtersState"
    />

    <FilterGroup
      title="regions"
      :filter-data="filters.regions"
      :is-selected-filter="isSelectedFilter"
      :toggle-filter="toggleFilter"
      :filters-state="filtersState"
    />
  </div>
</template>

<script>
import { autorun, toJS } from "mobx";
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
      filters: {},
      filtersState: {}
    };
  },
  methods: {
    toggleFilter(filter) {
      return this.store.toggleFilter(filter);
    },
    isSelectedFilter(filter) {
      return this.store.isSelectedFilter(filter);
    },
    resetAllFilters() {
      return this.store.resetAllFilters();
    }
  },
  mounted() {
    autorun(() => {
      this.filters = this.store.countriesStore.filters;
      this.filtersState = toJS(this.store.filtersState);
    });
  }
};
</script>

<style scoped></style>
