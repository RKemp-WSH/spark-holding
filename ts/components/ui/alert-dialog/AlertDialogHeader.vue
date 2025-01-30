<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/ts/utilities"; // Use the alias

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn('flex flex-col gap-y-2 text-center', props.class)">
    <slot />
  </div>
</template>
