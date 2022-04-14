<template>
  <tspan dy="10" x="0">{{ props.label }}</tspan>
</template>

<script setup lang="ts">
interface CustomLabelProps {
  label: string;
}

const props = defineProps<CustomLabelProps>();
</script>

<style scoped lang="scss"></style>
