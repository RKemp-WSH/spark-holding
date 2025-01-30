<script setup lang="ts">
import { NavigationMenuItem, type NavigationMenuItemProps, useForwardPropsEmits } from "radix-vue";
import { computed } from "vue";

const props = defineProps<NavigationMenuItemProps & {
  class?: string; // Add class prop for customization
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props; // Filter out class prop
  return delegated;
});

const forwardedProps = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <NavigationMenuItem v-bind="forwardedProps" :class="props.class">
    <slot />
  </NavigationMenuItem>
</template>