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
import styled from "vue-styled-components";

const FilterWraper = styled.div`
  padding-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 3px;
`;
const FilterTitle = styled.h5`
  margin: 0 10px 15px;
  font-size: 18px;
`;
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
