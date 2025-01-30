<script setup lang="ts">
import { type HTMLAttributes, computed, ref, defineExpose } from "vue";
import { TabsList, type TabsListProps } from "radix-vue";
import { cn } from "@/ts/utilities"; // Use the alias

const props = defineProps<
  TabsListProps & {
    defaultStyles?: boolean;
    class?: HTMLAttributes["class"];
  }
>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;
  return delegated;
});

const tabsListRootRef = ref<HTMLElement | null>(null);

defineExpose({
  tabsListRootRef,
});
</script>

<template>
  <TabsList
    ref="tabsListRootRef"
    v-bind="delegatedProps"
    :class="
      cn(
        defaultStyles !== true
          ? 'inline-flex h-10 items-center justify-center rounded-lg bg-wsh-gray-100 p-1 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'
          : '',
        props.class,
      )
    "
  >
    <slot />
  </TabsList>
</template>
