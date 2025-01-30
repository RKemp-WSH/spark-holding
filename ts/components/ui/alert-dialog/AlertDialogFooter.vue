<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/ts/utilities"; // Use the alias

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'mb-2 flex flex-col-reverse sm:gap-x-2 md:flex-row md:justify-center',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
