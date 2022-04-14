<template>
  <div style="height: 100vh">
    <VueFlow v-model="elements">
      <template #connection-line="props">
        <DesignerCustomConnectionLine v-bind="props" />
      </template>
      <Background :variant="BackgroundVariant.Lines" />
    </VueFlow>
  </div>
</template>

<script setup lang="ts">
import { VueFlow, Background, BackgroundVariant, Elements } from "~/packages/designer";

const elements = ref<Elements>([
  {
    id: "1",
    type: "input",
    label: "Node 1",
    position: { x: 250, y: 5 },
  },
]);
</script>

<style scoped lang="scss"></style>
