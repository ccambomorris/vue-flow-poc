<template>
  <div class="save__controls">
    <button @click="onSave">save</button>
    <button @click="onRestore">restore</button>
    <button @click="onAdd">add node</button>
  </div>
</template>

<script setup lang="ts">
import { useZoomPanHelper, FlowExportObject, Node, useVueFlow } from "~/packages/designer";

const flowKey = "example-flow";
const state = useStorage<FlowExportObject>(flowKey, {
  nodes: [],
  edges: [],
  position: [NaN, NaN],
  zoom: 1,
});

const getNodeId = () => `randomnode_${+new Date()}`;

const { setTransform } = useZoomPanHelper();
const { addNodes, setNodes, setEdges, instance, dimensions } = useVueFlow();

const onSave = () => {
  state.value = instance.value?.toObject();
};

const onRestore = () => {
  const flow: FlowExportObject | null = state.value;

  if (flow) {
    const [x = 0, y = 0] = flow.position;
    setNodes(state.value.nodes);
    setEdges(state.value.edges);
    setTransform({ x, y, zoom: flow.zoom || 0 });
  }
};

const onAdd = () => {
  const newNode = {
    id: `random_node-${getNodeId()}`,
    label: "Added node",
    position: { x: Math.random() * dimensions.value.width, y: Math.random() * dimensions.value.height },
  } as Node;
  addNodes([newNode]);
};
</script>

<style scoped lang="scss">
.save__controls {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 4;
  font-size: 12px;
}

.save__controls button {
  margin-left: 5px;
}
</style>
