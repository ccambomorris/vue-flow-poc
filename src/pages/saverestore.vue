<template>
  <div style="height: 100vh">
    <VueFlow v-model="elements">
      <DesignerSaveControls />
    </VueFlow>
  </div>
</template>

<script setup lang="ts">
import { VueFlow, Elements } from "~/packages/designer";

const initialElements: Elements = [
  { id: "1", label: "Node 1", position: { x: 100, y: 100 } },
  { id: "2", label: "Node 2", position: { x: 100, y: 200 } },
  { id: "e1-2", source: "1", target: "2" },
];

const elements = ref(initialElements);
</script>

<style scoped lang="scss"></style>
