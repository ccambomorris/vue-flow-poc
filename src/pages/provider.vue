<template>
  <div class="providerflow">
    <DesignerProviderSideBar />
    <div class="vue-flow-wrapper">
      <VueFlow v-model="elements" :connection-mode="ConnectionMode.Loose" @pane-ready="onLoad">
        <Controls />
      </VueFlow>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueFlow, Controls, FlowInstance, Elements, ConnectionMode, useVueFlow } from "~/packages/designer";

const onLoad = (flowInstance: FlowInstance) => console.log("flow loaded:", flowInstance);

const initialElements: Elements = [
  { id: "1", type: "input", label: "Node 1", position: { x: 250, y: 5 } },
  { id: "2", label: "Node 2", position: { x: 100, y: 100 } },
  { id: "3", label: "Node 3", position: { x: 400, y: 100 } },
  { id: "4", label: "Node 4", position: { x: 400, y: 200 } },
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3" },
];

useVueFlow();
const elements = ref<Elements>(initialElements);
</script>

<style scoped lang="scss">
.providerflow {
  flex-direction: column;
  display: flex;
  //height: 100%;
  height: 100vh;
}

.providerflow aside {
  border-right: 1px solid #eee;
  padding: 15px 10px;
  font-size: 12px;
  background: #fcfcfc;
}

.providerflow aside .description {
  margin-bottom: 10px;
}

.providerflow aside .title {
  font-weight: 700;
  margin-bottom: 5px;
}

.providerflow aside .transform {
  margin-bottom: 20px;
}

.providerflow .vue-flow-wrapper {
  flex-grow: 1;
  height: 100%;
}

.providerflow .selectall {
  margin-top: 10px;
}

@media screen and (min-width: 768px) {
  .providerflow {
    flex-direction: row;
  }

  .providerflow aside {
    width: 20%;
    max-width: 250px;
  }
}
</style>
