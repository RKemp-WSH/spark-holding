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

const props = defineProps<
  DialogContentProps & { class?: HTMLAttributes["class"] }
>();
const emits = defineEmits<DialogContentEmits>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <DialogContent
      :class="
        cn(
          'relative z-50 my-8 grid w-full max-w-lg gap-4 border border-neutral-200 bg-white p-5 shadow-lg duration-200 dark:border-neutral-800 dark:bg-neutral-950 sm:rounded-lg md:w-full',
          props.class,
        )
      "
      v-bind="forwarded"
      @pointerdown-outside="
        (event) => {
          const originalEvent = event.detail.originalEvent;
          const target = originalEvent.target as HTMLElement;
          const rect = target.getBoundingClientRect(); // Get bounding rect of target
          if (
            !target.contains(originalEvent.target as Node) && // Check if click is outside the target
            (originalEvent.clientX < rect.left ||
              originalEvent.clientX > rect.right ||
              originalEvent.clientY < rect.top ||
              originalEvent.clientY > rect.bottom)
          ) {
            event.preventDefault();
          }
        }
      "
    >
      <slot />

      <DialogClose
        class="absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
      >
        <X class="h-6 w-6" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>