<script setup lang="ts">
import { DialogTrigger, type DialogTriggerProps, useForwardPropsEmits } from "radix-vue";
import { computed } from "vue";

const props = defineProps<DialogTriggerProps>();

const emits = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DialogTrigger v-bind="forwardedProps">
    <slot />
  </DialogTrigger>
</template>