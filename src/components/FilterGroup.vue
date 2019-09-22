<template>
  <div>
    <h3>{{ title }}</h3>

    <div v-for="filter in filterData.slice(0, 10)" :key="filter.value">
      <input
        type="checkbox"
        :id="filter.value"
        :checked="isSelectedFilter(filter)"
        @change="toggleFilter(filter)"
      />
      <label :for="filter.value">{{ filter.value }} ({{ filter.count }})</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterGroup",
  props: {
    filterData: {
      type: Array,
      default: () => []
    },
    title: String,
    isSelectedFilter: Function,
    toggleFilter: Function
  }
};
</script>

<style scoped></style>
