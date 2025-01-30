<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  NavigationMenuList,
  type NavigationMenuListProps,
  useForwardPropsEmits,
} from "radix-vue";
import { cn } from "@/ts/utilities";

const props = defineProps<
  NavigationMenuListProps & { class?: HTMLAttributes["class"] }
>();

const emits = defineEmits();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <NavigationMenuList
    v-bind="forwardedProps"
    :class="
      cn(
        'group flex flex-1 list-none items-center justify-center gap-x-3 xl:gap-x-4',
        props.class,
      )
    "
  >
    <slot />
  </NavigationMenuList>
</template>