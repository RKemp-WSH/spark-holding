<script setup lang="ts">
import { SelectTrigger, type SelectTriggerProps } from "radix-vue";
import { computed, ref, watch } from "vue";
import { cn } from "@/ts/utilities";
import { ChevronDown, Loader2 } from "lucide-vue-next";

const props = defineProps<SelectTriggerProps & {
    class?: string,
    state?: "normal" | "invalid",
    isLoading?: boolean
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const isInvalid = computed(() => props.state === "invalid");

const selectTriggerClasses = computed(() =>
  cn(
    "flex h-10 w-full items-center rounded-md border-2 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    isInvalid.value
      ? "border-wsh-red-500 text-wsh-red-500"
      : "border-wsh-gray-800",
    props.class,
  ),
);
</script>

<template>
  <SelectTrigger
    :class="selectTriggerClasses"
    v-bind="$attrs"
  >
    <slot />
    <ChevronDown
      v-if="!props.isLoading"
      class="h-4 w-4 opacity-50"
      :class="selectTriggerClasses"
    />
    <Loader2
      v-else
      class="h-4 w-4 animate-spin opacity-50"
      :class="selectTriggerClasses"
    />
  </SelectTrigger>
</template>
