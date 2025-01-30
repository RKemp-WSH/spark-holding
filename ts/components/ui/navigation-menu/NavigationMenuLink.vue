<script setup lang="ts">
import {
  NavigationMenuLink,
  type NavigationMenuLinkEmits,
  type NavigationMenuLinkProps,
  useForwardPropsEmits,
} from "radix-vue";
import { computed } from "vue";

const props = defineProps<NavigationMenuLinkProps>();
const emits = defineEmits<NavigationMenuLinkEmits>();

const delegatedProps = computed(() => {
  return { ...props };
});

const forwardedProps = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <NavigationMenuLink v-bind="forwardedProps">
    <slot />
  </NavigationMenuLink>
</template>