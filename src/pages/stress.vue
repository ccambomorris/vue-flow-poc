<template>
  <div style="height: 100vh">
    <VueFlow />
  </div>
</template>

<script setup lang="ts">
import { VueFlow, useVueFlow, Edge, Node } from "~/packages/designer";

const getElements = (xElements = 10, yElements = 10) => {
  const initialNodes: Node[] = [];
  const initialEdges: Edge[] = [];
  let nodeId = 1;
  let recentNodeId = null;

  for (let y = 0; y < yElements; y++) {
    for (let x = 0; x < xElements; x++) {
      const position = { x: x * 100, y: y * 50 };
      const node = {
        id: nodeId.toString(),
        style: { width: 50, fontSize: 11 },
        label: `Node ${nodeId}`,
        position,
      };
      initialNodes.push(node);

      if (recentNodeId && nodeId <= xElements * yElements) {
        initialEdges.push({ id: `${x}-${y}`, source: recentNodeId.toString(), target: nodeId.toString() });
      }

      recentNodeId = nodeId;
      nodeId++;
    }
  }

  return {
    nodes: initialNodes,
    edges: initialEdges,
  };
};

const { nodes, edges } = getElements(10, 10);

const { onPaneReady } = useVueFlow({
  nodes,
  edges,
});

onPaneReady((i) => {
  i.fitView({
    padding: 0.2,
  });
  console.log(i.getElements());
});
</script>

<style scoped lang="scss"></style>
