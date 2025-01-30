<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import {
  CheckboxRoot,
  CheckboxIndicator,
  type CheckboxRootProps,
  type CheckboxRootEmits,
  useForwardPropsEmits,
} from "radix-vue";
import { Check } from "lucide-vue-next";
import { cn } from "@/ts/utilities";
import { computed, withDefaults } from "vue";

const props = withDefaults(
  defineProps<
    CheckboxRootProps & {
      variant?: "default" | "formModuleLight" | "formModuleDark";
      mode?: "light" | "dark";
      class?: HTMLAttributes["class"];
    }
  >(),
  {
    variant: "default",
    mode: "light",
    class: "",
  },
);
const emits = defineEmits<CheckboxRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);

const classes = {
  checkboxRootClass: {
    default:
      "peer h-9 w-9 shrink-0 rounded-md border-2 border-wsh-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-wsh-gray-800 data-[state=checked]:text-white",
    formModuleLight:
      "peer h-[1.125rem] w-[1.125rem] shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-wsh-navy-500 data-[state=checked]:bg-wsh-navy-500 data-[state=checked]:text-white",
    formModuleDark:
      "peer h-[1.125rem] w-[1.125rem] shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-white data-[state=checked]:bg-white data-[state=checked]:text-wsh-navy-500",
  },
  checkboxIndicatorClass: {
    default: "flex h-full w-full items-center justify-center text-current",
    formModuleLight:
      "flex h-full w-full items-center justify-center text-current",
    formModuleDark:
      "flex h-full w-full items-center justify-center text-current",
  },
};

const variantClass = computed(() => {
  return classes.checkboxRootClass[props.variant];
});

const indicatorClass = computed(() => {
  return classes.checkboxIndicatorClass[props.variant];
});
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="cn(variantClass, props.class)"
  >
    <CheckboxIndicator :class="indicatorClass">
      <slot>
        <Check class="h-7 w-7" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>