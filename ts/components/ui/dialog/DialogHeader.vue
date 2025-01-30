<script setup lang="ts">
import { cn } from "@/ts/utilities";

const props = defineProps<{
  class?: string; // Using string type for class
}>();

const defaultClasses = 'flex flex-col gap-y-1.5 text-center sm:text-left';

// Add defineEmits if you need to emit any events from this component
// const emits = defineEmits<{
//  (e: 'someEvent', payload: any): void;
// }>();
</script>

<template>
  <div :class="cn(defaultClasses, props.class)">
    <slot />
  </div>
</template>