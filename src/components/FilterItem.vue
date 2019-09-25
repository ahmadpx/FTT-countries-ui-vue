<template>
  <FilterWraper>
    <Checkbox
      type="checkbox"
      :id="filter.value"
      :checked="isSelectedFilter"
      :onChange="()=>toggleFilter(filter)"
    />
    <Label :for="filter.value">
      <Value>{{ filter.value }}</Value>

      <Count>({{ filter.count }})</Count>
    </Label>
  </FilterWraper>
</template>

<script>
import { FilterWraper, Label, Value, Count } from "./FilterItem.styles";
import Checkbox from "./Checkbox";
export default {
  name: "FilterItem",
  components: {
    FilterWraper,
    Label,
    Value,
    Count,
    Checkbox
  },
  props: {
    filter: Object,
    isSelectedFilter: Boolean,
    toggleFilter: Function
  }
};
</script>

<style scoped></style>
