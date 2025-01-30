<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  SelectScrollDownButton,
  type SelectScrollDownButtonProps,
  useForwardProps,
} from "radix-vue";
import { ChevronDown } from "lucide-vue-next";
import { cn } from "@/ts/utilities"; // Use the alias

const props = defineProps<
  SelectScrollDownButtonProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectScrollDownButton
    v-bind="forwardedProps"
    :class="
      cn(
        'flex cursor-default items-center justify-center py-1 text-wsh-gray-800',
        props.class,
      )
    "
  >
    <slot>
      <ChevronDown class="h-5 w-5" />
    </slot>
  </SelectScrollDownButton>
</template>
