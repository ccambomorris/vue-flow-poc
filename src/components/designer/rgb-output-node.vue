<template>
  <div :style="{ backgroundColor: props.rgb }" class="rgb-output-node">
    <div class="text-md uppercase">{{ props.rgb }}</div>
    <Handle type="target" :position="Position.Left" />
  </div>
</template>

<script setup lang="ts">
import { Handle, NodeProps, Position } from "~/packages/designer";

interface RBGOutputNodeProps extends NodeProps {
  rgb: string;
}

const props = defineProps<RBGOutputNodeProps>();
</script>

<style scoped lang="scss">
.rgb-output-node {
  padding: 9px;
  border-radius: 25px;
  text-align: left;
  color: white;
}
</style>
