<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  NavigationMenuRoot,
  type NavigationMenuRootEmits,
  type NavigationMenuRootProps,
  useForwardPropsEmits,
} from "radix-vue";
import NavigationMenuViewport from "./NavigationMenuViewport.vue";
import { cn } from "@/ts/utilities";

const props = defineProps<
  NavigationMenuRootProps & { class?: HTMLAttributes["class"] }
>();

const emits = defineEmits<NavigationMenuRootEmits>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <NavigationMenuRoot
    v-bind="forwardedProps"
    :class="
      cn(
        'relative z-10 flex max-w-max flex-1 items-center justify-center',
        props.class,
      )
    "
  >
    <slot />
    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>