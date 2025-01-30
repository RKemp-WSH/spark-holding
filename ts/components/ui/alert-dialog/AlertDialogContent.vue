<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  AlertDialogContent,
  type AlertDialogContentEmits,
  type AlertDialogContentProps,
  AlertDialogOverlay,
  AlertDialogPortal,
  useForwardPropsEmits,
} from "radix-vue";
import { cn } from "@/ts/utilities"; // Use the alias

const props = withDefaults(
  defineProps<
    AlertDialogContentProps & {
      class?: HTMLAttributes["class"];
      isLoadingSpinner?: boolean;
    }
  >(),
  {
    class: "",
    isLoadingSpinner: false,
  },
);
const emits = defineEmits<AlertDialogContentEmits>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <AlertDialogPortal>
    <AlertDialogOverlay
      class="`data-[state=open]:animate-in data-[state=open]:fade-in-0${isLoadingSpinner ? '' : ' bg-black/80'}` fixed inset-0 z-50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
    />
    <AlertDialogContent
      v-bind="forwarded"
      :class="
        cn(
          `fixed left-1/2 top-1/2 z-50 grid w-4/5 max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-md bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] p-6${isLoadingSpinner ? '' : ' border border-neutral-200 shadow-lg dark:border-neutral-800'} duration-200 dark:bg-neutral-950 md:w-[500px]`,
          props.class,
        )
      "
    >
      <slot />
    </AlertDialogContent>
  </AlertDialogPortal>
</template>
