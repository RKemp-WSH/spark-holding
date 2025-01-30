<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/ts/utilities";
import { buttonVariants, type ButtonVariants } from "./ButtonVariants";
import { computed } from "vue";

interface Props {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "default",
  class: "",
});

const buttonClasses = computed(() => {
  return cn(buttonVariants({ variant: props.variant, size: props.size }), props.class);
});
</script>

<template>
  <button :class="buttonClasses" v-bind="$attrs">
    <slot />
  </button>
</template>
