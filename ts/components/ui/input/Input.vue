<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/ts/utilities";
import { ref } from "vue";

interface InputProps {
  type?:
    | "text"
    | "email"
    | "password"
    | "tel"
    | "url"
    | "search"
    | "number"
    | "date"
    | "time";
  class?: HTMLAttributes["class"];
  placeholder?: string;
  value?: string | number; // Changed modelValue to value
  disabled?: boolean;
  readonly?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  class: "",
});

const emit = defineEmits<{
  (e: "update:value", value: string | number): void; // Changed update:modelValue
}>();

const onInput = (event: Event) => {
  emit("update:value", (event.target as HTMLInputElement).value);
};

const inputRef = ref<HTMLInputElement | null>(null);

defineExpose({
  inputRef, // Expose the ref
});
</script>

<template>
  <input
    ref="inputRef"
    :type="props.type"
    :class="
      cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
    :placeholder="props.placeholder"
    :value="props.value"
    :disabled="props.disabled"
    :readonly="props.readonly"
    @input="onInput"
    v-bind="$attrs"
  />
</template>