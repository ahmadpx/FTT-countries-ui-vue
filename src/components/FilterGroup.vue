<template>
  <div>
    <h3>{{ title }}</h3>

    <pre>{{ JSON.stringify(filtersState) }}</pre>

    <div v-for="filter in filterData.slice(0, 10)">
      <filter-item
        :filter="filter"
        :toggle-filter="toggleFilter"
        :is-selected-filter="isSelectedFilter(filter)"
      />
    </div>
  </div>
</template>

<script>
import FilterItem from "./FilterItem";

export default {
  name: "FiltersGroup",
  components: {
    FilterItem
  },
  props: {
    filterData: {
      type: Array,
      default: () => []
    },
    title: String,
    isSelectedFilter: Function,
    toggleFilter: Function,
    filtersState: Object
  }
};
</script>

<style scoped></style>
