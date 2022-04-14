<template>
  <div class="layoutflow">
    <VueFlow v-model="elements" :node-extent="nodeExtent" :connection-mode="ConnectionMode.Loose" @pane-ready="onLayout('TB')">
      <Controls />
    </VueFlow>
    <div class="controls">
      <button :style="{ marginRight: 10 }" @click="onLayout('TB')">vertical layout</button>
      <button @click="onLayout('LR')">horizontal layout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import dagre from "dagre";
import { VueFlow, Controls, ConnectionMode, Elements, XYPosition, isNode, CoordinateExtent, Position } from "~/packages/designer";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeExtent: CoordinateExtent = [
  [0, -100],
  [1000, 500],
];

const position: XYPosition = { x: 0, y: 0 };

const initialElements: Elements = [
  { id: "1", type: "input", label: "input", position },
  { id: "2", label: "node 2", position },
  { id: "2a", label: "node 2a", position },
  { id: "2b", label: "node 2b", position },
  { id: "2c", label: "node 2c", position },
  { id: "2d", label: "node 2d", position },
  { id: "3", label: "node 3", position },
  { id: "4", label: "node 4", position },
  { id: "5", label: "node 5", position },
  { id: "6", type: "output", label: "output", position },
  { id: "7", type: "output", label: "output", position: { x: 400, y: 450 } },
  { id: "e12", source: "1", target: "2", type: "smoothstep", animated: true },
  { id: "e13", source: "1", target: "3", type: "smoothstep", animated: true },
  { id: "e22a", source: "2", target: "2a", type: "smoothstep", animated: true },
  { id: "e22b", source: "2", target: "2b", type: "smoothstep", animated: true },
  { id: "e22c", source: "2", target: "2c", type: "smoothstep", animated: true },
  { id: "e2c2d", source: "2c", target: "2d", type: "smoothstep", animated: true },
  { id: "e45", source: "4", target: "5", type: "smoothstep", animated: true },
  { id: "e56", source: "5", target: "6", type: "smoothstep", animated: true },
  { id: "e57", source: "5", target: "7", type: "smoothstep", animated: true },
];

const elements = ref<Elements>(initialElements);

const onLayout = (direction: string) => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  elements.value.forEach((el) => {
    if (isNode(el)) {
      dagreGraph.setNode(el.id, { width: 150, height: 50 });
    } else {
      dagreGraph.setEdge(el.source, el.target);
    }
  });

  dagre.layout(dagreGraph);

  elements.value.forEach((el) => {
    if (isNode(el)) {
      const nodeWithPosition = dagreGraph.node(el.id);
      el.targetPosition = isHorizontal ? Position.Left : Position.Top;
      el.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;
      el.position = { x: nodeWithPosition.x, y: nodeWithPosition.y };
    }
  });
};
</script>

<style scoped lang="scss">
.layoutflow {
  flex-grow: 1;
  position: relative;
  height: 100vh;
}

.layoutflow .controls {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
}

.controls button {
  margin-left: 10px;
}
</style>
