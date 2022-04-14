<template>
  <div :key="props.id" :style="nodeStyles">
    <div>node {{ props.id }}</div>
    <Handle id="left" type="source" :position="Position.Left" />
    <Handle id="right" type="source" :position="Position.Right" />
    <Handle id="top" type="source" :position="Position.Top" />
    <Handle id="bottom" type="source" :position="Position.Bottom" />
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";
import { Handle, Position } from "~/packages/designer";

interface Props {
  id: string;
}

const props = defineProps<Props>();
const nodeStyles: CSSProperties = { padding: "10px 15px", border: "1px solid #ddd" };
</script>

<style scoped lang="scss"></style>
