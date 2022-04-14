<template>
  <div class="vue-flow__example-multiflows">
    <DesignerFlow />
    <DesignerFlow />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.vue-flow__example-multiflows {
  display: flex;
  height: 100%;
}

.vue-flow__example-multiflows .vue-flow {
  width: 100%;
  height: 100%;
}

.vue-flow__example-multiflows .vue-flow:first-child {
  border-right: 2px solid #333;
}
</style>
