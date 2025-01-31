<script setup lang="ts">
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectRoot,
  type SelectRootProps,
  type SelectRootEmits,
} from "radix-vue";
import { ChevronDown, ChevronUp } from "lucide-vue-next";
import { cn } from "@/ts/utilities";
import { computed, ref } from "vue";

const props = withDefaults(
  defineProps<{
    label?: string;
    name?: string;
    disabled?: boolean;
    id?: string;
    placeholder?: string;
    modelValue?: string | number;
    defaultValue?: string | number;
    autocomplete?: string;
    state?: "normal" | "invalid";
    containerClasses?: string;
    showMetadata?: boolean;
    class?: string;
    isLoading?: boolean; // Add isLoading prop
  }>(),
  {
    modelValue: undefined,
    defaultValue: undefined,
    autocomplete: "off",
    isLoading: false, // Default to false
  },
);

const emits = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const isInvalid = computed(() => props.state === "invalid");

const selectClasses = computed(() =>
  cn(
    "flex h-10 w-full items-center rounded-md border-2 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    isInvalid.value
      ? "border-wsh-red-500 text-wsh-red-500"
      : "border-wsh-gray-800",
    props.class,
  ),
);

const labelClasses = computed(() =>
  cn(
    "form-select-label pointer-events-none absolute top-0 ml-2.5 mt-[18px] origin-top-left bg-transparent px-1 text-sm uppercase transition-transform duration-300",
    isInvalid.value ? "text-wsh-red-500" : "text-wsh-gray-500",
  ),
);

const chevronClasses = computed(() =>
  cn("h-4 w-4 opacity-50", isInvalid.value ? "text-wsh-red-500" : ""),
);

const handleValueChange = (value: string | number) => {
  emits("update:modelValue", value);
};
</script>

<template>
  <div class="relative" :class="props.containerClasses">
    <SelectRoot
      :name="props.name"
      :disabled="props.disabled"
      @update:model-value="handleValueChange"
    >
      <SelectTrigger
        :is-loading="props.isLoading"
        :class="selectClasses"
        :aria-label="props.label"
        :id="props.id"
      >
        <SelectValue :placeholder="props.placeholder" />
        <ChevronDown :class="chevronClasses" />
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton v-if="props.showMetadata">
          <ChevronUp />
        </SelectScrollUpButton>
        <slot />
        <SelectScrollDownButton v-if="props.showMetadata">
          <ChevronDown />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectRoot>
    <label :class="labelClasses" :for="props.name">
      {{ props.label }}
    </label>
  </div>
</template>

<style scoped lang="scss">
// Moves the label when the input is focused
select:not([default-value=""]) ~ label,
button[aria-expanded="true"] ~ label,
button:focus ~ label {
  background-color: white;
  transform: translateY(-75%) scale(0.85);
}
</style>