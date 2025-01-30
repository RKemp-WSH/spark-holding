<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import {
  AccordionItem,
  type AccordionItemProps,
  useForwardProps,
} from "radix-vue";
import { cn } from "@/ts/utilities";
import { computed } from "vue";

const props = defineProps<
  AccordionItemProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <AccordionItem
    v-bind="forwardedProps"
    :class="cn('border-b border-white/20', props.class)"
  >
    <slot />
  </AccordionItem>
</template>