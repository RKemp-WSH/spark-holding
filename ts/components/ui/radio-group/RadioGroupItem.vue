<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import {
  RadioGroupItem,
  type RadioGroupItemProps,
  useForwardPropsEmits,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "@/ts/utilities";

interface Props extends RadioGroupItemProps {
  class?: HTMLAttributes["class"];
  variant?: "default" | "green";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  class: "",
});

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, variant, ...delegated } = props;
  return delegated;
});

const forwardedProps = useForwardPropsEmits(delegatedProps, emits);

const buttonClasses = computed(() =>
  cn(
    "group inline-flex h-9 w-9 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    props.variant === "default"
      ? "bg-wsh-gray-800 text-white hover:bg-wsh-blue-600 hover:text-white data-[state=checked]:bg-wsh-blue-500 data-[state=checked]:text-white"
      : "bg-wsh-green-500 text-white hover:bg-wsh-green-600 data-[state=checked]:bg-wsh-green-500 data-[state=checked]:text-white",
    props.class,
  ),
);
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    :class="buttonClasses"
  >
    <slot />
  </RadioGroupItem>
</template>