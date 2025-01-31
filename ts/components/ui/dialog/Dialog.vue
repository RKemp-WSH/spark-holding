<script setup lang="ts">
import { DialogRoot, type DialogRootEmits, type DialogRootProps } from "radix-vue";
import { ref, watch, onMounted } from 'vue';

const props = withDefaults(defineProps<DialogRootProps & {
  open?: boolean;
  defaultOpen?: boolean;
}>(), {
  open: undefined,
  defaultOpen: false,
});

const emits = defineEmits<DialogRootEmits & {
  'update:open': [value: boolean]
}>();

const isOpen = ref<boolean>(props.defaultOpen);

watch(() => props.open, (newOpen) => {
  if (newOpen !== undefined) {
    isOpen.value = newOpen;
  }
});

watch(isOpen, (newOpen) => {
  if (props.open === undefined) {
    emits('update:open', newOpen);
  }
});

onMounted(() => {
  isOpen.value = props.open !== undefined ? props.open : props.defaultOpen;
})
</script>

<template>
  <DialogRoot :open="isOpen" @update:open="isOpen = $event">
    <slot />
  </DialogRoot>
</template>