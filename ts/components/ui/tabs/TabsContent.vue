<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { TabsContent, type TabsContentProps } from "radix-vue";
import { cn } from "@/ts/utilities"; // Use the alias

const props = defineProps<
  TabsContentProps & {
    defaultStyles?: boolean;
    class?: HTMLAttributes["class"];
  }
>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <TabsContent
    :class="
      cn(
        defaultStyles !== true
          ? 'mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300'
          : '',
        props.class,
      )
    "
    v-bind="delegatedProps"
  >
    <slot />
  </TabsContent>
</template>
