<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from "radix-vue";
import { X } from "lucide-vue-next";
import { cn } from "@/ts/utilities";
import { cva, type VariantProps } from "class-variance-authority";

// Moved dialogContentVariants and dialogCloseVariants inside setup
const dialogContentVariants = cva(
  "focus-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg",
  {
    variants: {
      variant: {
        default:
          "grid w-4/5 max-w-lg gap-4 border border-neutral-200 bg-white p-5 shadow-lg duration-200",
        video: "keep-aspect-ratio z-50",
        gallery:
          "flex items-center justify-center bg-transparent left-0 top-0 right-0 bottom-0 translate-x-0 translate-y-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const dialogCloseVariants = cva(
  "default-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500",
  {
    variants: {
      variant: {
        default: "absolute right-4 top-4",
        video:
          "white-on-black-ring absolute right-0 -top-10 text-white transition-all",
        gallery:
          "white-on-black-ring transition-all text-white absolute right-4 top-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type DialogContentVariants = VariantProps<typeof dialogContentVariants>;

const props = withDefaults(
  defineProps<
    DialogContentProps & {
      class?: HTMLAttributes["class"];
      variant?: DialogContentVariants["variant"];
    }
  >(),
  {
    class: "",
    variant: "default",
  },
);
const emits = defineEmits<DialogContentEmits>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, variant, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

// Computed property for applying dialogContentVariants
const contentClasses = computed(() => {
  return cn(dialogContentVariants({ variant: props.variant }), props.class);
});

// Computed property for applying dialogCloseVariants
const closeClasses = computed(() => {
  return cn(dialogCloseVariants({ variant: props.variant }));
});
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-wsh-blue-900/95 transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <DialogContent
      v-bind="forwarded"
      :class="contentClasses"
    >
      <slot />

      <DialogClose :class="closeClasses">
        <X class="h-6 w-6" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>

<style scoped lang="scss">
$aspect-width: 16;
$aspect-height: 9;
$max-width: theme("screens.xl");
$horizontal-padding: 40px;
$vertical-padding: 100px;

.keep-aspect-ratio {
  max-width: $max-width;
  max-height: calc($max-width * ($aspect-height / $aspect-width));

  // Calculates the height when the width can be full screen while preserving the aspect ratio specified above and factoring in the padding
  @media (max-width: calc((($aspect-width / $aspect-height) * 100vh) -
        ($horizontal-padding * (1 - ($aspect-height / $aspect-width))))) {
    width: calc(100vw - $horizontal-padding);
    height: calc(
      (($aspect-height / $aspect-width) * 100vw) -
        ($horizontal-padding * (1 - ($aspect-height / $aspect-width)))
    );
  }

  // Calculates the width when the height can be full screen while preserving the aspect ratio specified above and factoring in the padding
  @media (min-width: calc((($aspect-width / $aspect-height) * 100vh) - ($vertical-padding * ($aspect-width / $aspect-height)))) {
    width: calc(
      (($aspect-width / $aspect-height) * 100vh) -
        ($vertical-padding * ($aspect-width / $aspect-height))
    );
    height: calc(100vh - $vertical-padding);
  }
}
</style>