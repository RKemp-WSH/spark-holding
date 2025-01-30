<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  NavigationMenuIndicator,
  type NavigationMenuIndicatorProps,
  useForwardPropsEmits,
} from "radix-vue";
import { cn } from "@/ts/utilities";

const props = defineProps<
  NavigationMenuIndicatorProps & { class?: HTMLAttributes["class"] }
>();

const emits = defineEmits(); // Add defineEmits

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <NavigationMenuIndicator
    v-bind="forwardedProps"
    :class="
      cn(
        'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
        props.class,
      )
    "
  >
    <div
      class="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-neutral-200 shadow-md dark:bg-neutral-800"
    />
  </NavigationMenuIndicator>
</template>