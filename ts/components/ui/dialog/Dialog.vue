<script setup lang="ts">
import { DialogRoot, type DialogRootEmits, type DialogRootProps, useForwardPropsEmits } from "radix-vue";
import { ref, watch, onMounted } from 'vue';

const props = withDefaults(defineProps<DialogRootProps & {
  open?: boolean;
  defaultOpen?: boolean;
}>(), {
  open: undefined,
  defaultOpen: false,
});

const emits = defineEmits<DialogRootEmits & {
  'update:open': [value: boolean];
}>();

const forwarded = useForwardPropsEmits(props, emits);

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
  <DialogRoot v-bind="{ ...forwarded, open: isOpen }" @update:open="(value) => emits('update:open', value)">
    <slot />
  </DialogRoot>
</template>