<script setup lang="ts">
import { ref, watch } from 'vue';
import { type HTMLAttributes, computed } from "vue";
import {
  SelectIcon,
  SelectTrigger,
  type SelectTriggerProps,
  useForwardProps,
} from "radix-vue";
import { ChevronDown } from "lucide-vue-next";
import { cn } from "@/ts/utilities"; // Use the alias

const props = defineProps<
  SelectTriggerProps & {
    class?: HTMLAttributes["class"];
    state?: "invalid" | "normal";
  }
>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

const invalidClasses = ref(
  props.state === "invalid" ? "border-wsh-red-500 text-wsh-red-500" : "",
);

watch(
  () => props.state,
  (newState) => {
    if (newState && newState === "invalid") {
      invalidClasses.value = "border-wsh-red-500 text-wsh-red-500";
    } else {
      invalidClasses.value = "";
    }
  },
);
</script>
<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex h-14 w-full items-center justify-between rounded-md border-2 border-wsh-gray-800 bg-white px-3 py-2 ring-offset-white placeholder:text-wsh-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        props.class,
        invalidClasses,
      )
    "
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown :class="cn('h-5 w-5 text-wsh-gray-800', invalidClasses)" />
    </SelectIcon>
  </SelectTrigger>
</template>
