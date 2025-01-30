<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  NavigationMenuViewport,
  type NavigationMenuViewportProps,
  useForwardProps,
} from "radix-vue";
import { cn } from "@/ts/utilities";

const props = defineProps<
  NavigationMenuViewportProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <div class="absolute left-0 top-full flex justify-center">
    <NavigationMenuViewport
      v-bind="forwardedProps"
      :class="
        cn(
          'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 md:w-[var(--radix-navigation-menu-viewport-width)]',
          props.class,
        )
      "
    >
      <slot />
    </NavigationMenuViewport>
  </div>
</template>