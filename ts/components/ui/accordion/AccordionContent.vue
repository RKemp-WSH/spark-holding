<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { AccordionContent, type AccordionContentProps } from "radix-vue";
import { cn } from "@/ts/utilities";
import { cva, type VariantProps } from "class-variance-authority";
import { computed } from "vue";

// Define accordionContentVariants outside of the setup function
const accordionContentVariants = cva(
  "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all",
  {
    variants: {
      sizeVariant: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
        default: "text-sm",
      },
    },
    defaultVariants: {
      sizeVariant: "default",
    },
  },
);

type AccordionContentVariants = VariantProps<typeof accordionContentVariants>;

interface Props extends AccordionContentProps {
  class?: HTMLAttributes["class"];
  sizeVariant?: AccordionContentVariants["sizeVariant"];
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

// Create a computed property for the dynamic classes
const classes = computed(() => {
  return cn(
    'my-1 p-1',
    accordionContentVariants({ sizeVariant: props.sizeVariant }),
    props.class,
  );
});
</script>

<template>
  <AccordionContent v-bind="delegatedProps" :class="classes">
    <slot />
  </AccordionContent>
</template>