<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/ts/utilities";
import { ref, watch, computed } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  defaultValue?: string | number;
  modelValue?: string | number;
  state?: "normal" | "invalid";
  autocomplete?: string;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});

const invalidClasses = computed(() => {
  return props.state === "invalid" ? "border-wsh-red-500 text-wsh-red-500" : "";
});
</script>

<template>
  <textarea
    v-model="modelValue"
    :autocomplete="props.autocomplete"
    :class="
      cn(
        'flex min-h-28 w-full rounded-md border-2 border-wsh-gray-800 bg-white px-3 py-2 pr-8 placeholder:text-wsh-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
        invalidClasses,
      )
    "
  />
</template>