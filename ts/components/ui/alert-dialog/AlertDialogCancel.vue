<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { AlertDialogCancel, type AlertDialogCancelProps } from "radix-vue";
import { cn } from "@/ts/utilities"; // Use the alias
import { buttonVariants, type ButtonVariants } from "@/ts/components/ui/button"; // Import from new location

const props = defineProps<
  AlertDialogCancelProps & { 
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
  <AlertDialogCancel
    v-bind="delegatedProps"
    :class="
      cn(
        buttonVariants({ variant, size }), // Use buttonVariants
        'text-md mt-2 h-12 w-full rounded-md font-medium md:mt-0',
        props.class,
      )
    "
  >
    <slot />
  </AlertDialogCancel>
</template>