<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  AlertDialogDescription,
  type AlertDialogDescriptionProps,
} from "radix-vue";
import { cn } from "@/ts/utilities"; // Use the alias

const props = defineProps<
  AlertDialogDescriptionProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AlertDialogDescription
    v-bind="delegatedProps"
    :class="cn('text-sm text-neutral-500 dark:text-neutral-400', props.class)"
  >
    <slot />
  </AlertDialogDescription>
</template>
