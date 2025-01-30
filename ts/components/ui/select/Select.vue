<script setup lang="ts">
import { SelectRoot, type SelectRootEmits, type SelectRootProps } from "radix-vue";
import { useForwardPropsEmits } from "radix-vue";
import { ref, watch, onMounted } from 'vue';

const props = withDefaults(defineProps<SelectRootProps & {
  open?: boolean; // Add a prop to control the open state
}>(), {
  open: undefined,
});

const emits = defineEmits<SelectRootEmits & {
  'update:open': [value: boolean]; // Emit an event when the open state changes
}>();

const forwarded = useForwardPropsEmits(props, emits);

const isOpen = ref<boolean>(props.open);

watch(() => props.open, (newOpen) => {
  isOpen.value = newOpen;
});

const handleOpenChange = (value: boolean) => {
  isOpen.value = value;
  emits('update:open', value); // Emit the update:open event
};

onMounted(() => {
  isOpen.value = props.open;
});
</script>

<template>
  <SelectRoot v-bind="{ ...forwarded, open: isOpen }" @update:open="handleOpenChange">
    <slot :isOpen="isOpen" />
  </SelectRoot>
</template>