<template>
  <div>
    <input
      type="checkbox"
      :id="filter.value"
      :checked="isSelectedFilter"
      @change="toggleFilter(filter)"
    />
    <label :for="filter.value">{{ filter.value }} ({{ filter.count }})</label>
  </div>
</template>

<script>
export default {
  name: "FilterItem",
  props: {
    filter: Object,
    isSelectedFilter: Boolean,
    toggleFilter: Function
  }
};
</script>

<style scoped></style>
