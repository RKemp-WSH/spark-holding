<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import {
  DialogDescription,
  type DialogDescriptionProps,
  useForwardProps,
} from "radix-vue";
import { cn } from "@/ts/utilities";
import { computed } from "vue";

const props = defineProps<
  DialogDescriptionProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DialogDescription
    v-bind="forwardedProps"
    :class="cn('text-sm text-neutral-500 dark:text-neutral-400', props.class)"
  >
    <slot />
  </DialogDescription>
</template>