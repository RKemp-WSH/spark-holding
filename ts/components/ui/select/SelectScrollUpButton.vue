<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  SelectScrollUpButton,
  type SelectScrollUpButtonProps,
  useForwardProps,
} from "radix-vue";
import { ChevronUp } from "lucide-vue-next";
import { cn } from "@/ts/utilities"; // Use the alias

const props = defineProps<
  SelectScrollUpButtonProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectScrollUpButton
    v-bind="forwardedProps"
    :class="
      cn(
        'flex cursor-default items-center justify-center py-1 text-wsh-gray-800',
        props.class,
      )
    "
  >
    <slot>
      <ChevronUp class="h-4 w-4" />
    </slot>
  </SelectScrollUpButton>
</template>
