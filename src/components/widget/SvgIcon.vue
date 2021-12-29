<template>
  <svg class="svg-icon">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps<{ name: string }>()
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
  cursor: pointer;
}
</style>
