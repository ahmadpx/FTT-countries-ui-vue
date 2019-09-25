<template>
  <FilterWraper :key="JSON.stringify(filtersState)">
    <FilterTitle>{{ title }}</FilterTitle>

    <div v-for="filter in filterData.slice(0, 10)" :key="filter.value">
      <filter-item
        :filter="filter"
        :toggle-filter="toggleFilter"
        :is-selected-filter="isSelectedFilter(filter)"
      />
    </div>
  </FilterWraper>
</template>

<script>
import FilterItem from "./FilterItem";
import { FilterWraper, FilterTitle } from "./FilterGroup.styles";

export default {
  name: "FiltersGroup",
  components: {
    FilterItem,
    FilterWraper,
    FilterTitle
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
