<template>
  <div :key="JSON.stringify(filtersState)">
    <h3>{{ title }}</h3>

    <div v-for="filter in filterData.slice(0, 10)" :key="filter.value">
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
