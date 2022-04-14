<template>
  <g>
    <path class="animated" fill="none" stroke="#222" :stroke-width="1.5" :d="`M${props.sourceX},${props.sourceY} C ${props.sourceX} ${props.targetY} ${props.sourceX} ${props.targetY} ${props.targetX},${props.targetY}`" />
    <circle :cx="props.targetX" :cy="props.targetY" fill="#fff" :r="5" stroke="#222" :stroke-width="2.5" />
  </g>
</template>

<script setup lang="ts">
interface CustomConnectionLineProps {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
}
const props = defineProps<CustomConnectionLineProps>();
</script>

<style scoped lang="scss"></style>
