<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { AlertDialogAction, type AlertDialogActionProps } from "radix-vue";
import { cn } from "@/ts/utilities";
import { buttonVariants, type ButtonVariants } from "@/ts/components/ui/button/ButtonVariants";

const props = defineProps<
  AlertDialogActionProps & { 
    class?: HTMLAttributes["class"],
    variant?: ButtonVariants["variant"],
    size?: ButtonVariants["size"]
   }
>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, variant, size, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AlertDialogAction
    v-bind="delegatedProps"
    :class="
      cn(
        buttonVariants({ variant, size }),
        'text-md mt-2 h-12 w-full rounded-md font-medium md:mt-0',
        props.class,
      )
    "
  >
    <slot />
  </AlertDialogAction>
</template>