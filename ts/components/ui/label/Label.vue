<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import {
  Label,
  type LabelProps,
  useForwardProps,
} from "radix-vue";
import { cn } from "@/ts/utilities";
import { computed } from "vue";

const props = withDefaults(
  defineProps<LabelProps & { class?: HTMLAttributes["class"] }>(),
  {
    class: "",
  },
);

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <Label v-bind="forwardedProps" :class="cn('text-md font-medium text-black', props.class)">
    <slot />
  </Label>
</template>