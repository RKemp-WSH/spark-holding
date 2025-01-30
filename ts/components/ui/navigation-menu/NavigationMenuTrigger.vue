<script setup lang="ts">
import { cva } from "class-variance-authority";
import { type HTMLAttributes, computed } from "vue";
import {
  NavigationMenuTrigger,
  type NavigationMenuTriggerProps,
  useForwardPropsEmits,
} from "radix-vue";
import { ChevronDown } from "lucide-vue-next";
import { cn } from "@/ts/utilities";

const props = defineProps<
  NavigationMenuTriggerProps & { class?: HTMLAttributes["class"] }
>();

// No need for NavigationMenuTriggerEmits since it doesn't exist.
// If you need to emit custom events, define them here:
const emits = defineEmits<{
  (e: "update:modelValue", value: string | number): void; // Example
}>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

// No emits are being forwarded since there are no defined emits for this component.
const forwardedProps = useForwardPropsEmits(delegatedProps, emits);

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white xl:px-2 xl:py-2 text-wsh-navy-500 transition-colors hover:bg-neutral-100 hover:bg-wsh-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
);
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwardedProps"
    :class="cn(navigationMenuTriggerStyle(), 'group', props.class)"
  >
    <slot />
    <ChevronDown
      class="relative top-px ml-1 h-5 w-5 text-wsh-navy-500 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>