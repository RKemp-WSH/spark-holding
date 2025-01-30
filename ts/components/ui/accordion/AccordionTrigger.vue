<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from "radix-vue";
import { ChevronDown } from "lucide-vue-next";
import { cn } from "@/ts/utilities";
import { cva, type VariantProps } from "class-variance-authority";

// Define accordionTriggerVariants and chevronVariants using cva
const accordionTriggerVariants = cva(
  "flex flex-1 items-center justify-between rounded-md pb-2 pt-0 outline-none transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-wsh-navy-500 [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      sizeVariant: {
        small: "text-sm md:text-base",
        medium: " text-base md:text-xl",
        large: "text:2xl md:text-3xl",
        default: "",
      },
    },
    defaultVariants: {
      sizeVariant: "default",
    },
  },
);

const chevronVariants = cva(
  "shrink-0 transition-transform duration-200",
  {
    variants: {
      sizeVariant: {
        small: "h-5 w-5",
        medium: "h-8 w-8 ml-7 md:ml-10",
        large: "h-10 w-10",
        default: "h-5 w-5",
      },
    },
    defaultVariants: {
      sizeVariant: "default",
    },
  },
);

type AccordionTriggerVariants = VariantProps<typeof accordionTriggerVariants>;

// Define Props
interface Props extends AccordionTriggerProps {
  class?: HTMLAttributes["class"];
  sizeVariant?: AccordionTriggerVariants["sizeVariant"];
}

const props = withDefaults(defineProps<Props>(), {
  sizeVariant: "default",
  class: "",
});

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, sizeVariant, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          accordionTriggerVariants({ sizeVariant: props.sizeVariant }),
          props.class,
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown
          :class="cn(chevronVariants({ sizeVariant: props.sizeVariant }))"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
