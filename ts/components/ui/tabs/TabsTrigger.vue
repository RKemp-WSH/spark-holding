<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from "radix-vue";
import { cn } from "@/ts/utilities"; // Use the alias

const props = defineProps<
  TabsTriggerProps & {
    defaultStyles?: boolean;
    class?: HTMLAttributes["class"];
  }
>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <TabsTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        defaultStyles !== true
          ? 'custom-tab-shadow inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-neutral-950 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=active]:bg-neutral-950 dark:data-[state=active]:text-neutral-50'
          : '',
        props.class,
      )
    "
  >
    <slot />
  </TabsTrigger>
</template>

<style scoped>
.custom-tab-shadow[data-state="active"] {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
