<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/ts/utilities";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

// Add defineEmits if you need to emit any events
// const emits = defineEmits<{
//  (e: 'someEvent', payload: any): void;
// }>();
</script>

<template>
  <div
    :class="
      cn(
        'spark-dialog-footer', // Added component-specific class
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>