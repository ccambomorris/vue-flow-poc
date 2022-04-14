<template>
  <div style="height: 100vh">
    <VueFlow v-model="elements" :default-zoom="1.5" :min-zoom="0.2" :max-zoom="4">
      <div class="updatenode__controls">
        <label>label:</label>
        <input v-model="opts.name" @input="updateNode" />

        <label class="updatenode__bglabel">background:</label>
        <input v-model="opts.bg" type="color" @input="updateNode" />

        <div class="updatenode__checkboxwrapper">
          <label>hidden:</label>
          <input v-model="opts.hidden" type="checkbox" @change="updateNode" />
        </div>
      </div>
    </VueFlow>
  </div>
</template>

<script setup lang="ts">
import { VueFlow, Elements } from "~/packages/designer";

const initialElements: Elements = [
  { id: "1", label: "-", position: { x: 100, y: 100 } },
  { id: "2", label: "Node 2", position: { x: 100, y: 200 } },
  { id: "e1-2", source: "1", target: "2" },
];

const elements = ref<Elements>(initialElements);
const opts = ref({
  bg: "#eee",
  name: "Node 1",
  hidden: false,
});

const updateNode = () => {
  elements.value.forEach((el) => {
    if (el.id === "1") {
      // it's important that you create a new object here in order to notify react flow about the change
      el.label = opts.value.name;
      el.style = { backgroundColor: opts.value.bg };
      el.hidden = opts.value.hidden;
    }
  });
};

onMounted(updateNode);
</script>

<style scoped lang="scss">
.updatenode__controls {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 4;
  font-size: 12px;
}

.updatenode__controls label {
  display: block;
}

.updatenode__bglabel {
  margin-top: 10px;
}

.updatenode__checkboxwrapper {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
</style>
