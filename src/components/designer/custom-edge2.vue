<template>
  <path :id="props.id" class="vue-flow__edge-path" :d="edgePath" :marker-end="markerEnd" />
  <EdgeText :x="center[0]" :y="center[1]" :label="props.data?.text" :label-style="{ fill: 'white' }" :label-show-bg="true" :label-bg-style="{ fill: 'red' }" :label-bg-padding="[2, 4]" :label-bg-border-radius="2" @click="onClick" />
</template>

<script setup lang="ts">
import { getEdgeCenter, getBezierPath, getMarkerId, Position, EdgeProps, EdgeText } from "~/packages/designer";

interface CustomEdgeProps extends EdgeProps {
  source: string;
  target: string;
  sourceHandleId?: string;
  targetHandleId?: string;
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  sourcePosition: Position;
  targetPosition: Position;
  markerEndId?: string;
  data?: {
    text: string;
  };
}

const props = defineProps<CustomEdgeProps>();

const edgePath = computed(() =>
  getBezierPath({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    sourcePosition: props.sourcePosition,
    targetX: props.targetX,
    targetY: props.targetY,
    targetPosition: props.targetPosition,
  })
);
//const markerEnd = computed(() => getMarkerId(props.markerEnd));
const markerEnd = computed(() => getMarkerId(props.markerEndId));
const center = computed(() =>
  getEdgeCenter({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    targetX: props.targetX,
    targetY: props.targetY,
  })
);
const onClick = () => console.log(props.data);
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style scoped lang="scss"></style>
