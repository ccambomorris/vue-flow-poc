<template>
  <div class="dndflow" @drop="onDrop" style="height: 100vh">
    <VueFlow @dragover="onDragOver" />
    <DesignerSideBar />
  </div>
</template>

<script setup lang="ts">
import { VueFlow, Node, useVueFlow } from "~/packages/designer";

let id = 0;
const getId = () => `dndnode_${id++}`;

const { instance, onConnect, addEdges, addNodes } = useVueFlow({
  nodes: [
    {
      id: "1",
      type: "input",
      label: "input node",
      position: { x: 250, y: 5 },
    },
  ],
});
const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
};

onConnect((params) => addEdges([params]));

const onDrop = (event: DragEvent) => {
  if (instance.value) {
    const type = event.dataTransfer?.getData("application/vueflow");
    const position = instance.value.project({ x: event.clientX, y: event.clientY - 40 });
    const newNode = {
      id: getId(),
      type,
      position,
      label: `${type} node`,
    } as Node;
    addNodes([newNode]);
  }
};
</script>

<style scoped lang="scss">
.dndflow {
  flex-direction: column;
  display: flex;
  height: 100%;
}

.dndflow aside {
  border-right: 1px solid #eee;
  padding: 15px 10px;
  font-size: 12px;
  background: #fcfcfc;
}

.dndflow aside > * {
  margin-bottom: 10px;
  cursor: grab;
}

.dndflow aside .description {
  margin-bottom: 10px;
}

.dndflow .vue-flow-wrapper {
  flex-grow: 1;
  height: 100%;
}

@media screen and (min-width: 768px) {
  .dndflow {
    flex-direction: row;
  }

  .dndflow aside {
    width: 20%;
    max-width: 180px;
  }
}
</style>
